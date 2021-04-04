import { ScoreEntity, GameMode } from '~/models/Score'

export type HistoryDate = {
  month: number,
  date: number,
  time: number,
  time1: number
}

export class GameHistoryUtil {

  static getHistoryDates() {
    const dates: HistoryDate[] = []
    const d = new Date()

    d.setHours(0, 0, 0)
    d.setMilliseconds(0)
    d.setDate(d.getDate() - 30)
    for(let i = 0; i < 32; i++) {
      dates.push({
        month: d.getMonth() + 1,
        date: d.getDate(),
        time: d.getTime(),
        time1: d.getTime() + 24 * 60 * 60 * 1000
      })
      d.setDate(d.getDate() + 1)
    }
    return dates
  }
  static sprintHistory(scores: ScoreEntity[], chartDates:string[], historyDates:HistoryDate[]) {
    const { _counts, _scores } = GameHistoryUtil.getSprintHistory(scores, historyDates)
    return GameHistoryUtil.chartObject(chartDates, _scores, _counts)
  }

  static termFilteredScoreEntities(mode:string, scores:ScoreEntity[], historyDates:HistoryDate[]) {
    if(historyDates.length == 0) {
      return []
    }
    const timeMin = historyDates[0].time
    const timeMax = historyDates[historyDates.length - 1].time1

    return scores
      .filter((o:ScoreEntity) => o.mode === mode)
      .filter((o:ScoreEntity) => o.createdAt >= timeMin)
      .filter((o:ScoreEntity) => o.createdAt < timeMax)
  }

  static getSprintHistory(scores:ScoreEntity[], historyDates:HistoryDate[]) {
    const _counts = []
    const _scores = []

    for(const d of historyDates) {
      const ss = scores.filter((o:ScoreEntity) => d.time <= o.createdAt && o.createdAt < d.time1)
      _counts.push(ss.length)
      if(ss.length > 0) {
        _scores.push(
          ss.map((o:ScoreEntity) => o.score)
            .reduce((a:number, c:number) => Math.min(a, c))
        )
      } else {
        _scores.push(0)
      }
    }

    return { _counts, _scores }
  }

  static getEndressHistory(scores:ScoreEntity[], historyDates:HistoryDate[]) {
    const _counts = []
    const _scores = []

    for(const d of historyDates) {
      const ss = scores.filter((o:ScoreEntity) => d.time <= o.createdAt && o.createdAt < d.time1)
      _counts.push(ss.length)
      if(ss.length > 0) {
        _scores.push(
          ss.map((o:ScoreEntity) => o.score)
            .reduce((a:number, c:number) => Math.max(a, c))
        )
      } else {
        _scores.push(0)
      }
    }

    return { _counts, _scores }
  }

  static chartObject(dates:string[], scores:number[], counts:number[]) {
    return {
      labels: dates,
      datasets: [
        {
          label: 'じかん',
          data: scores,
          borderColor: "#FFC107",
          backgroundColor: "transparent",
          yAxisID: "y-axis-1"
        },
        {
          label: 'かいすう',
          data: counts,
          borderColor: "#009688",
          backgroundColor: "transparent",
          yAxisID: "y-axis-2"
        }
      ]
    }
  }


  static chartOptions() {
    const fontColor = '#888'
    const gridYColor = '#ddd'
    const gridXColor = '#ddd'
    return {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        fontColor: fontColor
      },
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            position: 'left',
            ticks: {
              fontColor: fontColor
            },
            gridLines: {
              display: false,
              color: gridYColor
            }
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            position: 'right',
            ticks: {
              fontColor: fontColor
            },
            gridLines: {
              display: false,
              color: gridYColor
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              fontColor: fontColor
            },
            gridLines: {
              color: gridXColor
            }
          }
        ]
      }
    }
  }
}
