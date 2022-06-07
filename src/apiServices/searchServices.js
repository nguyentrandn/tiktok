
import * as request from '~/untils/request'; //import tất cả các export có trong file đó
 // Viết Async/await
 export const search = async (q, type = 'less') => {
    try{
      const res = await request.get('users/search',{
          params: {
            q,
            type,
          }
        })
       return res.data
    }catch(error){
      console.log(error);
    }
        
}