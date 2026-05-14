package main

import "fmt"

func sayHello(content string) {
	if content == "" {
		fmt.Println("...")
	} else {
		fmt.Println(content)
	}
}

func main() {
	sayHello("")
	sayHello("Hi")

	obj := map[string]string{
		"foo":  "bar",
		"hoge": "fuga",
	}
	fmt.Println(obj)

	nums := []int{1, 2, 3}
	for _, n := range nums {
		fmt.Println(n)
	}
}
