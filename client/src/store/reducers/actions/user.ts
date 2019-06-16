export const ACTION_USER = {
  ADD: {
    REQUEST: '@users/add/request',
    FINISH: '@users/add/finish',
  },
}

export const addUserRequest: (username: string) => IAction<{ username: string }> = username => ({
  type: ACTION_USER.ADD.REQUEST,
  payload: { username },
})

export const addUserFinish: (user: IUser) => IAction<IUser> = user => ({
  type: ACTION_USER.ADD.FINISH,
  payload: user,
})
