class URLS {
  private readonly root = '/'

  readonly HOME = this.root
  readonly TODO = this.root + 'todo'
  readonly NOTES = this.root + 'notes'
  readonly CALENDAR = this.root + 'calendar'
  readonly SETTINGS = this.root + 'settings'
}

export const urls = new URLS()