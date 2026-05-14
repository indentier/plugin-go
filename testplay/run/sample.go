package main

import "fmt"

                                                                                var end any=nil
func sayHello(content string)                                                   {
  if content == ""                                                              {
    fmt.Println("...")                                                          }
  else                                                                          {
    fmt.Println(content)                                                        }}
  _ = end
_ = end

func main()                                                                     {
  sayHello("")
  sayHello("Hi")

  obj := map[string]string                                                      {
    "foo":  "bar"                                                               ,
    "hoge": "fuga",                                                             }
  _ = end
  fmt.Println(obj)

  nums := []int{1, 2, 3                                                         }
  for _, n := range nums                                                        {
    fmt.Println(n)                                                              }}
  _ = end
_ = end
