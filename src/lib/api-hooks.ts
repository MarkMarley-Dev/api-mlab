import axios from 'axios';
import { useState } from 'react';
import {
  FetchState,
  PostData,
  ProfileImgData,
  FetchProfileState,
} from '../types';

export function useGetPosts() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [posts, setPosts] = useState<Array<PostData>>([]);

  const getPosts = async () => {
    setFetchState(FetchState.LOADING);
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const resData = res.data as Array<PostData>;
      setPosts(resData);
      setFetchState(FetchState.SUCCESS);
    } catch (error) {
      setFetchState(FetchState.ERROR);
    }
  };

  return [posts, fetchState, getPosts] as const;
}

export function useGetProfileImg() {
  const [fetchProfileState, setFetchProfileState] = useState(
    FetchProfileState.DEFAULT
  );
  const [profileImg, setProfileImg] = useState<Array<ProfileImgData>>([]);

  const getProfileImg = async () => {
    setFetchProfileState(FetchProfileState.LOADING);
    try {
      const res = await axios.get(
        'https://api.giphy.com/v1/gifs/search?api_key=kPaMBBXrdpVZ8N5Xu4y4v7uuZWSzUJeI&q=dog&limit=50&offset=0&rating=g&lang=en'
      );
      const resProfileData = res.data.data as Array<ProfileImgData>;
      setProfileImg(resProfileData);
      setFetchProfileState(FetchProfileState.SUCCESS);
    } catch (error) {
      setFetchProfileState(FetchProfileState.ERROR);
    }
  };

  return [profileImg, fetchProfileState, getProfileImg] as const;
}
