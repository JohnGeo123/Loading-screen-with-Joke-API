/**
 * Humor API
 * Awesome Humor API.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: mail@humorapi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineResponse2002 from '../com.humorapi.client.model/InlineResponse2002';
import InlineResponse2003 from '../com.humorapi.client.model/InlineResponse2003';
import InlineResponse2008 from '../com.humorapi.client.model/InlineResponse2008';

/**
* Memes service.
* @module com.humorapi.client/com.humorapi/MemesApi
* @version 1.0
*/
export default class MemesApi {

    /**
    * Constructs a new MemesApi. 
    * @alias module:com.humorapi.client/com.humorapi/MemesApi
    * @class
    * @param {module:com.humorapi.client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.humorapi.client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the downvoteMeme operation.
     * @callback module:com.humorapi.client/com.humorapi/MemesApi~downvoteMemeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.humorapi.client/com.humorapi.client.model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Downvote a Meme
     * Downvote a meme. See https://humorapi.com/docs/#Downvote-Meme for more.
     * @param {Number} id The object's id.
     * @param {module:com.humorapi.client/com.humorapi/MemesApi~downvoteMemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.humorapi.client/com.humorapi.client.model/InlineResponse2008}
     */
    downvoteMeme(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling downvoteMeme");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2008;
      return this.apiClient.callApi(
        '/memes/{id}/downvote', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the randomMeme operation.
     * @callback module:com.humorapi.client/com.humorapi/MemesApi~randomMemeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.humorapi.client/com.humorapi.client.model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Random Meme
     * Get a random meme. See https://humorapi.com/docs/#Random-Meme for more.
     * @param {Object} opts Optional parameters
     * @param {String} opts.keywords A comma separated list of keywords.
     * @param {module:com.humorapi.client/com.humorapi.client.model/Boolean} opts.keywordsInImage Whether the keywords should be found in the meme's image.
     * @param {module:com.humorapi.client/com.humorapi.client.model/String} opts.mediaType The type of the content. Can be either 'image' or 'video' or specific formats such as 'jpg', 'png', 'gif', or 'mp4'.
     * @param {Number} opts.number The number of results to retrieve between 1 and 10.
     * @param {Number} opts.minRating The minimum rating between 0 and 10 the result should have.
     * @param {module:com.humorapi.client/com.humorapi/MemesApi~randomMemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.humorapi.client/com.humorapi.client.model/InlineResponse2003}
     */
    randomMeme(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'keywords': opts['keywords'],
        'keywords-in-image': opts['keywordsInImage'],
        'media-type': opts['mediaType'],
        'number': opts['number'],
        'min-rating': opts['minRating']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2003;
      return this.apiClient.callApi(
        '/memes/random', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchMemes operation.
     * @callback module:com.humorapi.client/com.humorapi/MemesApi~searchMemesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.humorapi.client/com.humorapi.client.model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Memes
     * Search for memes. See https://humorapi.com/docs/#Search-Memes for more.
     * @param {Object} opts Optional parameters
     * @param {String} opts.keywords A comma separated list of keywords.
     * @param {module:com.humorapi.client/com.humorapi.client.model/Boolean} opts.keywordsInImage Whether the keywords should be found in the meme's image.
     * @param {module:com.humorapi.client/com.humorapi.client.model/String} opts.mediaType The type of the content. Can be either 'image' or 'video' or specific formats such as 'jpg', 'png', 'gif', or 'mp4'.
     * @param {Number} opts.number The number of results to retrieve between 1 and 10.
     * @param {Number} opts.minRating The minimum rating between 0 and 10 the result should have.
     * @param {Number} opts.offset The number of results to skip.
     * @param {module:com.humorapi.client/com.humorapi/MemesApi~searchMemesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.humorapi.client/com.humorapi.client.model/InlineResponse2002}
     */
    searchMemes(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'keywords': opts['keywords'],
        'keywords-in-image': opts['keywordsInImage'],
        'media-type': opts['mediaType'],
        'number': opts['number'],
        'min-rating': opts['minRating'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/memes/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the upvoteMeme operation.
     * @callback module:com.humorapi.client/com.humorapi/MemesApi~upvoteMemeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.humorapi.client/com.humorapi.client.model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upvote a Meme
     * Upvote a meme. See https://humorapi.com/docs/#Upvote-Meme for more.
     * @param {Number} id The object's id.
     * @param {module:com.humorapi.client/com.humorapi/MemesApi~upvoteMemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.humorapi.client/com.humorapi.client.model/InlineResponse2008}
     */
    upvoteMeme(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling upvoteMeme");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2008;
      return this.apiClient.callApi(
        '/memes/{id}/upvote', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}