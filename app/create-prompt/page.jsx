'use client'
// useSession is used to determine if the user is logged in
import { useSession } from 'next-auth/react';
import {useState} from 'react';
import { useRouter } from 'next/router';
import Form from '@components/Form';

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  })

  const createPrompt = async (e) => {
    //prevents the browser refresh
    e.preventDefault();
    setSubmitting(true)

    try {
      const response =  await fetch('/api/prompt/new', {
        method: 'POST',
        body:JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag
        })
      })
      if(response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt