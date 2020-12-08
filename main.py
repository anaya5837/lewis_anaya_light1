light.set_brightness(100)
while True:
    print("Light Level: " + input.light_level()) 
    if input.light_level() < 10:
        light.set_all(light.rgb(100, 100, 100))
    else: 
        light.clear
