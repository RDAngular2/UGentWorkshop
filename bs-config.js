// This configures the local development server. 
// Not needed for the application itself.
module.exports = {
  "port": 9000,
  "server": {
    "baseDir": ["./dist","./src","."],
    "middleware" : {
      0 : null
    }
  }
}