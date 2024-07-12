import PostCard from "./PostCard.tsx";

const HomeFeedScreen = () => {
    return(
        <div className=''>
            <PostCard
            post={{
                id: 1,
                title: 'Hello',
                content: 'THis content',
                user:{
                    id: 1,
                    name: 'John Doe'
                }
            }}
            >
                <PostCard.Title/>
                  <PostCard.Content/>
                <PostCard.User/>
                <PostCard.Buttons/>
            </PostCard>
        </div>
    )
}

export default HomeFeedScreen