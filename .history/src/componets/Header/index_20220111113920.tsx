import React ,{useState} from 'react'
import { Button } from '@tarojs/components'
export default function Header() {
const [title, setTitle] = useState('')
  return (
    <div className='todo-header'>
      <input type='text' 
        placeholder='请输入你的任务名称'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <div>{title}</div>
      <Button onClick={toIndex}>导航去index主页面</Button>
    </div>
  )
}
