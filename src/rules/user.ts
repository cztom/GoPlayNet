import type { FormRules } from 'element-plus'

export const rules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度3-20个字符', trigger: 'blur' }
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  nickName: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
  phoneNumber: [
    { pattern: /^1([0-9]|4|5[0-3,5-9]|6|7|9)d{8}$/, message: '手机格式不正确', trigger: 'blur' },
    { required: true, message: '请输入电话号码', trigger: 'blur' }
  ],
  email: [
    {
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: '邮箱不正确',
      trigger: 'blur'
    },
    { required: true, message: '请输入邮箱', trigger: 'blur' }
  ]
}
