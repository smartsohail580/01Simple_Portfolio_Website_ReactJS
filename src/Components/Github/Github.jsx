import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

  const { githubData, otherApiData } = useLoaderData();

  // const [data, SetData] = useState([])
  // useEffect (() => {
  //         fetch('https://api.github.com/users/hiteshchoudhary')
  //         .then(response => response.json())
  //         .then(data => {
  //             console.log(data);
  //             SetData(data)
  //         })
  // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-2xl'>
      <div>
        Github Followers: {githubData.followers}
        {/* <img src={githubData.avatar_url} alt='Git Picture' width={300} /> */}
      </div>
      <div>
        AnotherGit Followers: {otherApiData.followers}
        {/* <img src={githubData.avatar_url} alt='Git Picture' width={300} /> */}

      </div>
    </div>
  );
}

export default Github

export const githubInfoLoader = async () => {

  // For 1 API
  // export const githubInfoLoader = async () => { 
  // const Response = await fetch('https://api.github.com/users/hiteshchoudhary');
  // return response.json()}

  const githubResponse = await fetch('https://api.github.com/users/hiteshchoudhary');
  const githubData = await githubResponse.json();

  const otherApiResponse = await fetch('https://api.github.com/users/visionmedia');
  const otherApiData = await otherApiResponse.json();

  return { githubData, otherApiData };
};


