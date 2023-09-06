module.exports = {

    "resolve": {
      
      "fallback": {
        
        "crypto": false,
        "crypto-browserify": require.resolve('crypto-browserify'), 
        "buffer": require.resolve("buffer/")
      } 
 
    }
}
