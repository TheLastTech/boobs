# boobs
A react object that will remove the need for redux and other bulky libraries


Very easy to use. No npm installs

Include the file every where you would need data.

```javascript
  import Boobs from 'boobs'
  
  //Add an event hook for when a particular data key changes
  Boobs.AddChangeEventWithObject({Image2Seen: (Data)=>
            {
                this.setState(Data);
            }
        });
        
```

# A little bit later

Update the Data
```javascript

  Boubs.UpdateData({Image2Seen:true});
```

You can also bind a lot of keys to one hook with 
```javascript

   Boobs.AddChangeEventWithArray(["Image2Seen"], (Data)=>
            {
                this.setState(Data);
            }
        });
```

