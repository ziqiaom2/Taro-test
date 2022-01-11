import React ,{useState} from 'react'

export default function Header() {
const [title, setTitle] = useState('')
  return (
    <div className='todo-header'>
      <input type='text' 
        placeholder='请输入你的任务名称'
        value={title}
      />
    </div>
  )
}
