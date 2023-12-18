export interface DictionaryResponse {
  reikai: Reikai;
}

export interface Reikai {
  entries: { [key: string]: Entry[] };
}

export interface Entry {
  def: string
  hyouki: string[]
  hasImage: boolean
}