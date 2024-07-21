import React ,{useEffect,useCallback} from 'react'
import Container from './Container'
import Input from './Input'
import { useForm } from 'react-hook-form'


function PostForm(post) {
  const {register,handleSubmit,watch,setValue,getValues} = useForm()

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
        return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

    return "";
}, []);

useEffect(() => {
  const sub = watch((value,{name}) => {
    if(name == "title") {
      setValue("slug" , slugTransform(value.title))
    }
  })
  return () => sub.unsubscribe()
} , [watch])

  return (
    <Container>
      <div className = "w-full bg-white h-96">
        <div className = "h-96 text-black w-1/2 flex flex-col items-center gap-5">
          <Input
            type = "text"
            placeholder = "Enter your title"
            label = "Title: "
            className = "border border-gray-400 max-w-sm"
            {
                ...register("title" , {
                  required: true
                })
            }
          
          />
        <Input
            type = "text"
            placeholder = "Your slug"
            label = "Slug: "
            className = "border border-gray-400 max-w-sm"
            {
                ...register("slug" , {
                  required: true
                })
            }
            onInput = {(e) => {
              setValue("slug" , slugTransform(e.currentTarget.value))
            }
          }
          />
      
        </div>
      </div>
    </Container>
  )
}

export default PostForm