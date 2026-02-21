def is_valid_trick(trick_name):


    words = trick_name.split()

    if(words[0] in [ "Misty",
        "Ghost",
        "Thunder",
        "Solar",
        "Sky",
        "Phantom",
        "Frozen",
        "Polar"] and words[1] in [ "Twister",
            "Icequake",
            "Avalanche",
            "Vortex",
            "Snowstorm",
            "Frostbite",
            "Blizzard",
            "Shadow"]): return True
    else: return False




 