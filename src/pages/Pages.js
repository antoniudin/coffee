import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Items from './Items'

export default function Pages() {
  
    const blogPosts = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20  
    ]
    
    const [state, setState] = useState({
        pages: [],
        page: 1,
        max_posts: 2,
    })
    
    useEffect (()=> {
        calculatePages()
    },[state.max_posts, state.page])

    const calculatePages = () => {
        const pages = []
        const pages_total = Math.ceil(blogPosts.length/state.max_posts)
        for (let i=1; i<=pages_total; i++) {
            pages.push(i)
        } 
        setState({...state, pages})
    }

    const changeAmountOfPostsOnPage = (value) => {
        setState({...state, max_posts: value, page: 1})
    }

    const getPosts = () => {
        const {max_posts, page} = state
        const postsOnPage = []
        let n = page * max_posts
        while (postsOnPage.length < max_posts) {
            postsOnPage.push(blogPosts[n-1])
            n--;
        }
        return postsOnPage.reverse()
    }

    const setPage = (page) => {
        return Number.isInteger(page)? setState({...state, page}) : null
    }

    const changePage = (arg) => {
        let page = state.page
        page = page + (1*arg)
        return page<1?  null : page>state.pages.length? null : setState({...state, page})
    }

    const filterPages = () => {
        const {page, pages} = state
        const length = pages.length
        if (length<5) {
            console.log(pages)
            return pages 
        }
        const leftSibling = page-1
        const rightSibling = page+1
        const leftDots = '... '
        const rightDots = ' ...'
        switch (page) {
            case 1: return [1, 2, 3, rightDots, length]; break;
            case 2: return [1, 2, 3, rightDots, length]; break;
            case length: return [1, leftDots, length-2, length-1, length]; break;
            case length-1: return [1, leftDots, length-2, length-1, length]; break;
            default : return [1, leftDots,leftSibling, page, rightSibling, rightDots, length]; break;
        }
    }

    return (    
    
    <div>
        <div className='flex_row'>
        </div>
        <div>Content</div>
        {getPosts().map((e) => {
            return <span key={e}>{e}</span>
        }
        )}
        <div className="flex_row">
            <div className="arrow" style={{borderColor: state.page==1? 'white' : 'black'}} onClick={()=>changePage(-1)}></div>
            {filterPages().map(page=> {
                return <div onClick={()=>setPage(page)} key={page} className={state.page==page? 'currentPage' : 'page'}>{page}</div>
            }
            )}
            <div className="arrow" onClick={()=>changePage(1)} style={{transform: 'rotate(225deg)', borderColor: state.page==state.pages.length? 'white' : 'black' }}></div>
            <Items max_posts={state.max_posts} change={(value)=>changeAmountOfPostsOnPage(value)}/>
        </div>
    </div>
  )
}
