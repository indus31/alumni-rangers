import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PostCategory, PostType } from '../types/post/post-type';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly URI = 'http://localhost:3000/post'

  private _posts!: Observable <Array<PostType>>
  private _indexOfLastDisplayedPost: number = 0

  constructor(
    private _httpClient: HttpClient
  ) {}

  // findNext(nbNextPosts: number): Array<PostType> {
  //   let nextPosts: Array<PostType> = []
  //   if(this._indexOfLastDisplayedPost + nbNextPosts <= this._posts.length) {
  //     nextPosts = this._posts.slice(this._indexOfLastDisplayedPost, this._indexOfLastDisplayedPost + nbNextPosts)
  //     console.log(`PostService: _indexOfLastDisplayedPost: ${this._indexOfLastDisplayedPost}`)
  //     console.log(`PostService: nbNextPosts: ${nbNextPosts}`)
  //     console.log(`PostService: nextPosts: ${JSON.stringify(nextPosts)}`)
  //     this._indexOfLastDisplayedPost += nbNextPosts
  //   }
  //   return nextPosts
  // }

/*   findNext(): Observable<Array<PostType>> {
    let next3post = this._httpClient.get<Array<PostType>>(this.URI + `/${this._indexOfLastDisplayedPost}`);
    console.log('index : ' + this._indexOfLastDisplayedPost)
    this._indexOfLastDisplayedPost++;
    return next3post;
  } */
  findNext(): Observable<Array<PostType>> {
    let index = this._indexOfLastDisplayedPost;
    this._indexOfLastDisplayedPost++;
    return this._httpClient.get<Array<PostType>>(this.URI + `/${index}`);
  }

  findAll(): Observable<Array<PostType>> {
    return this._httpClient.get<Array<PostType>>(this.URI)
  }
  //   .pipe(
  //     map((posts: Array<any>) => { // Transform an observable to another observable
  //       return posts.map((post: any) => {
  //         return { // Deserialization
  //           id: post.id,
  //           title: post.title,
  //           content: post.content,
  //           postedAt: new Date(post.postedAt),
  //           media: post.media,
  //           author: {
  //             id: post.author.id,
  //             firstname: post.author.firstname,
  //             lastname: post.author.lastname,
  //             occupation: post.author.occupation,
  //             company: {
  //               id: post.author.company.id,
  //               name: post.author.company.name,
  //             },
  //             like:post.like
  //             poe: {
  //               id: post.author.poe.id,
  //               name: post.author.poe.name,
  //               beginAt: new Date(post.author.poe.beginAt),
  //               endAt: new Date(post.author.poe.endAt),
  //             }
  //           }
  //         }
  //       }) // Transform an array to another array
  //     })
  //   )
  // }
}
