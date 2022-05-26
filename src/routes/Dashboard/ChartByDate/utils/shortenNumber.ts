export const shortenNumber = (num: number) => {
  if (num >= 1000000000000) {
    if (num % 1000000000000 !== 0) {
      return `${(num / 1000000000000).toFixed(1)}조`
    }
    return `${(num / 1000000000000).toFixed(0)}조`
  }
  if (num >= 100000000000) {
    if (num % 100000000000 !== 0) {
      return `${(num / 100000000000).toFixed(1)}천억`
    }
    return `${(num / 100000000000).toFixed(0)}천억`
  }
  if (num >= 10000000000) {
    if (num % 10000000000 !== 0) {
      return `${(num / 10000000000).toFixed(1)}백억`
    }
    return `${(num / 10000000000).toFixed(0)}백억`
  }
  if (num >= 100000000) {
    if (num % 100000000 !== 0) {
      return `${(num / 100000000).toFixed(1)}억`
    }
    return `${(num / 100000000).toFixed(0)}억`
  }
  if (num >= 10000000) {
    if (num % 10000000 !== 0) {
      return `${(num / 10000000).toFixed(1)}천만`
    }
    return `${(num / 10000000).toFixed(0)}천만`
  }
  if (num >= 1000000) {
    if (num % 1000000 !== 0) {
      return `${(num / 1000000).toFixed(1)}백만`
    }
    return `${(num / 1000000).toFixed(0)}백만`
  }
  if (num >= 10000) {
    if (num % 10000 !== 0) {
      return `${(num / 10000).toFixed(1)}만`
    }
    return `${(num / 10000).toFixed(0)}만`
  }
  if (num >= 1000) {
    if (num % 1000 !== 0) {
      return `${(num / 1000).toFixed(1)}천`
    }
    return `${(num / 1000).toFixed(0)}천`
  }
  if (num >= 100) {
    if (num % 100 !== 0) {
      return `${(num / 100).toFixed(1)}백`
    }
    return `${(num / 100).toFixed(0)}백`
  }
  return num
}
