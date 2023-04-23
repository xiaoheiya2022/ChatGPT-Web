import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://mmbiz.qpic.cn/mmbiz_png/pDucf10vMW9Y0KnxYaX4qC6ngiamibSsSAc3aHUg1wKFCe1uIPn3AjwATy3BpRLia8xicNvfRQibO8WCCYJRiaQCjlSg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1',
      name: '微信公众号：sosbug',
      description: 'Star on <a href="https://github.com/Chanzhaoyu/chatgpt-bot" class="text-blue-500" target="_blank" >GitHub</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
