import { HasFormatter } from "../interfaces/HasFormatter.js"

export class ListTemplate {
  constructor(private container: HTMLUListElement){}

  render(item: HasFormatter, heading: string)
}