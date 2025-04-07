/*Promise

object from a operation 
mention the status of the operation
3 status:
    1.waiting/pending
    2.fulfiled/resolved - done
    3.Rejected/error
*/
const fs =require('fs').promises;

const readFile =  (filepath)=>{
    return fs.readFile('file1.txt','utf8') //return a promise
}

readFile('file.txt').then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.error(err);
})