light.setBrightness(100)
while (true) {
    console.log("Light Level: " + input.lightLevel())
    if (input.lightLevel() < 10) {
        light.setAll(light.rgb(100, 100, 100))
    } else {
        light.clear
    }
    
}
