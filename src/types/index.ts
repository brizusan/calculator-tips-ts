export type MenuItem = {
  id:number,
  name:string,
  price:number
}


export type Order = MenuItem & {
  quantity:number
}

export type Tips = {
  id:string,
  value:number
  label:string
}