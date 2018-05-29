/**
 * ORY Hydra - Cloud Native OAuth 2.0 and OpenID Connect Server
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here. Keep in mind that this document reflects the latest branch, always. Support for versioned documentation is coming in the future.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'))
  } else {
    // Browser globals (root is window)
    if (!root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer) {
      root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer = {}
    }
    root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer.MetricsApi = factory(
      root.OryHydraCloudNativeOAuth20AndOpenIdConnectServer.ApiClient
    )
  }
})(this, function(ApiClient) {
  'use strict'

  /**
   * Metrics service.
   * @module api/MetricsApi
   * @version Latest
   */

  /**
   * Constructs a new MetricsApi.
   * @alias module:api/MetricsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance

    /**
     * Callback function to receive the result of the getPrometheusMetrics operation.
     * @callback module:api/MetricsApi~getPrometheusMetricsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Prometheus metrics
     * This endpoint returns metrics formatted for Prometheus.
     * @param {module:api/MetricsApi~getPrometheusMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getPrometheusMetrics = function(callback) {
      var postBody = null

      var pathParams = {}
      var queryParams = {}
      var headerParams = {}
      var formParams = {}

      var authNames = []
      var contentTypes = [
        'application/json',
        'application/x-www-form-urlencoded'
      ]
      var accepts = ['application/json']
      var returnType = null

      return this.apiClient.callApi(
        '/metrics/prometheus',
        'GET',
        pathParams,
        queryParams,
        headerParams,
        formParams,
        postBody,
        authNames,
        contentTypes,
        accepts,
        returnType,
        callback
      )
    }
  }

  return exports
})