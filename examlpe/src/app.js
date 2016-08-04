/**
 * @interface get_fav_list
 * 
 * @head string Content-Type application/json
 * @head number Content-Length 
 * 
 * @req size number @number<1,100> page size
 * @req pn number @number<1,100> page number	
 *
 * @res 
 *     ret <Object>
 *     
 *         errCode string
 *         errMsg string
 *         result array @this.size
 *             _id string @uuid
 *      	   order_num number
 *             sub array number
 *     	       title string
 *      	   unique_name string
 *         success boolean 
 */

function get_fav_list (){

}