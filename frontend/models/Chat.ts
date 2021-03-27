export interface ChatLogEntity {
  name: string
  comment: string
  createdAt: number
}

export interface ChatReadEntity {
  room: string
  timestamp: number  // 読んだlog の timestamp
}
