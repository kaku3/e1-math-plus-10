import Random from '~/utils/Random'

export enum MAP_OBJECT {
  FLOOR = 0,
  WALL = 1,
  COIN = 10,
  KEY1 = 11,
  KEY2 = 12,
  PLUS0_PORTION = 13,
  RANDOM0_PORTION = 14,
  MATTOCK = 20,
  SWORD = 21,
  PLUS_PORTION = 22,
  CHEST1 = 30,
  CHEST2 = 31,
  PEAK = 40,
  DOOR = 50,
  ENEMY0 = 128,
  ENEMY1 = 129,
  ENEMY2 = 130,
  ENEMY3 = 131,
  ENEMY4 = 132,
}

const objectClasses = [
  { o: MAP_OBJECT.COIN, c: 'coin' },
  { o: MAP_OBJECT.KEY1, c : 'key1' },
  { o: MAP_OBJECT.KEY2, c : 'key2' },
  { o: MAP_OBJECT.PLUS0_PORTION, c : 'plus0-portion' },
  { o: MAP_OBJECT.RANDOM0_PORTION, c : 'random0-portion' },
  { o: MAP_OBJECT.MATTOCK, c : 'mattock' },
  { o: MAP_OBJECT.SWORD, c : 'sword' },
  { o: MAP_OBJECT.PLUS_PORTION, c : 'plus-portion' },
  { o: MAP_OBJECT.CHEST1, c : 'chest1' },
  { o: MAP_OBJECT.CHEST2, c : 'chest2' },
  { o: MAP_OBJECT.PEAK, c : 'peak' },
  { o: MAP_OBJECT.DOOR, c : 'door' },
  { o: MAP_OBJECT.ENEMY0, c : 'e0' },
  { o: MAP_OBJECT.ENEMY1, c : 'e1' },
  { o: MAP_OBJECT.ENEMY2, c : 'e2' },
  { o: MAP_OBJECT.ENEMY3, c : 'e3' },
  { o: MAP_OBJECT.ENEMY4, c : 'e4' },
]

export class Maze {
  random: Random
  constructor(seed: number = 0) {
    this.random = new Random(seed)
  }

  static getObjectClass(o:MAP_OBJECT):string | null {
    return objectClasses.find(v => v.o === o)?.c || null
  }


  generateFloor(floor:number): MAP_OBJECT[][] {
    if(floor === 0) {
      const maze = [
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
        [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, ],
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, ],
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
      ]
      maze[1][3] = MAP_OBJECT.COIN
      maze[1][4] = MAP_OBJECT.PEAK
      maze[1][5] = MAP_OBJECT.PLUS0_PORTION
      maze[1][6] = MAP_OBJECT.PLUS_PORTION
      maze[1][7] = MAP_OBJECT.RANDOM0_PORTION
      maze[1][9] = MAP_OBJECT.COIN
      maze[1][10] = MAP_OBJECT.KEY1
      maze[1][11] = MAP_OBJECT.CHEST1
      maze[1][13] = MAP_OBJECT.MATTOCK
      maze[2][13] = MAP_OBJECT.DOOR
      maze[2][15] = MAP_OBJECT.KEY2
      return maze
    }

    const sxs = [
      7, 9, 7, 5, 11, 7, 9, 7, 5, 11,
      13, 11, 15, 13, 11, 7, 15, 19, 13, 21,
    ]
    const sys = [
      7, 7, 9, 15, 11, 7, 9, 13, 7, 15,
      13, 11, 15, 13, 11, 7, 15, 19, 13, 21,
    ]
    let ix = (floor - 1) % sxs.length

    let sx = sxs[ix]
    let sy = sys[ix]

    const maze = this.generate(sx, sy)
    this.setObjects(floor, sx, sy, maze)
    return maze
  }
  setObjects(floor:number, sx:number, sy:number, maze: number[][]) {
    console.log({ floor, sx, sy, maze })
    const rnd = this.random

    // 金鍵と扉は必ず一つずつある
    maze[sy - 2][sx - 2] = MAP_OBJECT.DOOR
    while(true) {
      let x = rnd.nextInt(2, sx - 2)
      let y = rnd.nextInt(2, sy - 2)
      if(maze[y][x] === 0) {
        maze[y][x] = MAP_OBJECT.KEY2
        break
      }
    }

    // floor によって出現率が違う
    const rates = [
      [ MAP_OBJECT.PLUS_PORTION, Math.max(0.01, 0.02 - floor * 0.001) ],
      [ MAP_OBJECT.PLUS0_PORTION, Math.max(0.01, 0.05 - floor * 0.001) ],
      [ MAP_OBJECT.RANDOM0_PORTION, Math.max(0.01, 0.05 - floor * 0.001) ],
      [ MAP_OBJECT.SWORD, Math.max(0.03, 0.1 - floor * 0.002) ],
      [ MAP_OBJECT.KEY1, Math.max(0.03, 0.12 - floor * 0.008) ],
      [ MAP_OBJECT.CHEST2, Math.max(0.05, 0.15 - floor * 0.005) ],
      [ MAP_OBJECT.CHEST1, Math.max(0.04, 0.15 - floor * 0.005) ],
      [ MAP_OBJECT.MATTOCK, Math.max(0.02, 0.04 - floor * 0.001) ],
      [ MAP_OBJECT.COIN, Math.max(0.2, 0.5 - floor * 0.01) ],
      [ MAP_OBJECT.PEAK, Math.min(0.6, 0.3 + floor * 0.03) ],
    ]
    const enemyRates = [
      [ MAP_OBJECT.ENEMY0, Math.max(0, 1.0 - floor * 0.1) ],
      [ MAP_OBJECT.ENEMY1, Math.max(0, floor >= 7 ? 1.0 - (floor - 7) * 0.1 : 0) ],
      [ MAP_OBJECT.ENEMY2, Math.max(0, floor >= 12 ? 0.4 - (floor - 12) * 0.05 : 0) ],
      [ MAP_OBJECT.ENEMY3, Math.max(0, floor >= 15 ? 0.6 - (floor - 15) * 0.05 : 0) ],
      [ MAP_OBJECT.ENEMY4, Math.max(0, floor >= 18 ? 0.8 - (floor - 18) * 0.05 : 0) ],
    ]

    for(let r = 1; r < sy - 1; r++) {
      for(let c = 1; c < sx - 1; c++) {
        if(maze[r][c] !== MAP_OBJECT.FLOOR) {
          continue
        }

        for(const rr of rates) {
          if(rr[1] > rnd.nextFloat1()) {
            maze[r][c] = rr[0]
            break
          }
        }
      }
    }
    // peak を敵に置き換える
    if(floor >= 3) {
      for(let r = 1; r < sy - 1; r++) {
        for(let c = 1; c < sx - 1; c++) {
          if(maze[r][c] !== MAP_OBJECT.PEAK) {
            continue
          }
          if(rnd.nextFloat1() > 0.2) {
            for(const rr of enemyRates) {
              if(rr[1] > rnd.nextFloat1()) {
                maze[r][c] = rr[0]
                break
              }
            }
          }
        }
      }
    }

    maze[1][1] = MAP_OBJECT.FLOOR
  }

  generate(sx:number, sy:number): MAP_OBJECT[][] {
    // 外周のみ FLOOR, それ以外を WALL で初期化する
    let maze = Array(sy)
    for(let y = 0; y < maze.length; y++) {
      maze[y] = Array(sx).fill(MAP_OBJECT.FLOOR)
    }
    for(let y = 1; y < maze.length - 1; y++) {
      maze[y].fill(MAP_OBJECT.WALL, 1, sx - 1)
    }

    let starts:object[] = []
    this.dig(maze, starts, 1, 1)

    // 外壁を壁にする
    maze[0] = Array(sx).fill(1)
    maze[sy - 1] = Array(sx).fill(1)
    for(let y = 1; y < maze.length; y++) {
      maze[y][0] = MAP_OBJECT.WALL
      maze[y][sx - 1] = MAP_OBJECT.WALL
    }

    return maze
  }
  private dig(maze:number[][], starts:object[], x:number, y:number) {
    const rnd = this.random
    while(true) {
      const ds = []
      if(maze[y - 1][x] && maze[y - 2][x]) ds.push(0)
      if(maze[y][x + 1] && maze[y][x + 2]) ds.push(1)
      if(maze[y + 1][x] && maze[y + 2][x]) ds.push(2)
      if(maze[y][x - 1] && maze[y][x - 2]) ds.push(3)

      // 掘れない
      if(ds.length === 0) break

      this.setPath(maze, starts, x, y)

      // 掘る方向をランダムで決めて、2マス掘る
      const dd = ds[rnd.nextInt(0, ds.length - 1)]
      switch(dd) {
        case 0:
          this.setPath(maze, starts, x, --y)
          this.setPath(maze, starts, x, --y)
          break
        case 1:
          this.setPath(maze, starts, ++x, y)
          this.setPath(maze, starts, ++x, y)
          break
        case 2:
          this.setPath(maze, starts, x, ++y)
          this.setPath(maze, starts, x, ++y)
          break
        case 3:
          this.setPath(maze, starts, --x, y)
          this.setPath(maze, starts, --x, y)
          break
      }

      if(starts.length > 0) {
        const ii = rnd.nextInt(0, starts.length - 1)
        const start = starts[ii]
        starts = starts.filter((_, i) => i !== ii)

        //@ts-ignore
        this.dig(maze, starts, start.x, start.y)
      }
    }
  }
  private setPath(maze:number[][], starts:object[], x:number, y:number) {
    maze[y][x] = 0
    if((x & 1) == 1 && (y & 1) == 1) {
      starts.push({ x, y })
    }
  }
}
