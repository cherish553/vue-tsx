type ArrKey = {
  key: string
  message: string
}
type RulesDetail = {
  required: boolean
  message: string
  trigger: string
}
type Rule = {
  [propname: string]: Array<RulesDetail>
}
export function normalRules(key: string, message: string): void
export function normalRules(key: Array<ArrKey>, message?: string): void
export function normalRules(key: string | Array<ArrKey>, message?: string) {
  let rule: Rule = {}
  if (!Array.isArray(key)) {
    rule = {
      [key]: [{ required: true, message: `请输入${message}`, trigger: 'blur' }],
    }
    return rule
  }
  rule = key.reduce((pre, now) => {
    pre[now.key] = [
      { required: true, message: `请输入${now.message}`, trigger: 'blur' },
    ]
    return pre
  }, {} as Rule)
  return rule
}
