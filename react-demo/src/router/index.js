import TodoList from '../views/TodoList'
import DevelopmentRequest from '../views/DevelopmentRequest'
import GitHubQuery from '../views/GitHubQuery'

export const routers = [
  {
    path: '/TodoList',
    element: <TodoList />,
  },
  {
    path: '/DevelopmentRequest',
    element: <DevelopmentRequest />,
  },
  {
    path: '/GitHubQuery',
    element: <GitHubQuery />,
  },
]
