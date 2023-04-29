
export const calPercentage:any = (partialValue?:number, totalValue?:number) => {
  if (!partialValue || !totalValue){
    return 0;
  }


  if (partialValue === totalValue){
    return 100;
  }
  const value = (100 * partialValue) / totalValue;
  return value.toPrecision(2)
}

export const calcEntriesNumber:any = (points:number, cost:number) => {
  if(!cost) return 0;
  return Math.floor(points / cost)
}

export const millisecondsToMinutes:any = (milliseconds:number) => {
  return Math.floor(milliseconds / 60000)
}

export const formatAverageValue:any = (num:number) => {
  if (!num) return 0;
  return num.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 0 });
}
