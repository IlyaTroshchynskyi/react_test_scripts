import {createContext, PropsWithChildren, useContext} from "react";

type Post = {
    id: number
    title: string
    content: string
    user: {
        id: number
        name: string
    }
}

type PostCardProps = PropsWithChildren & {
    post: Post
}

type PostCardContext = {
    post: Post
}

const PostCardContext = createContext<PostCardContext | undefined>(undefined)
const usePostCardContext = (from: string) => {
    console.log('from', from)
    const context = useContext(PostCardContext)
    if (!context) {
        throw new Error('usePostCardContext must be used within a PostCard')
    }
    return context
}


const PostCard = ({post, children}: PostCardProps) => {
    return (
        <PostCardContext.Provider value={{post}}>
            <div className='flex w-[300px] flex-col gap-2 rounded-md bg-neutral-300 p-2'>
                {children}
            </div>
        </PostCardContext.Provider>
    )
}

export default PostCard

const PostCardTitle = () => {
    const {post} = usePostCardContext('PostCardTitle')
    return (
        <h2 className='text-lg font-semibold'>
            {post.title}
        </h2>
    )
}
const PostCardContent = () => {
    const {post} = usePostCardContext('PostCardContent')
    return (
        <p>{post.content}</p>
    )
}
const PostCardUser = () => {
    const {post} = usePostCardContext('PostCardUser')
    return (
        <p className='text-sm text-neutral-400'>By {post.user.name}</p>
    )
}

const PostCardButtons = () => {
    return (
        <div className='flex flex-row gap-2'>
            <button>
                Read More
            </button>
            <button>
                Comments
            </button>
        </div>
    )
}


PostCard.Title = PostCardTitle
PostCard.Content = PostCardContent
PostCard.User = PostCardUser
PostCard.Buttons = PostCardButtons