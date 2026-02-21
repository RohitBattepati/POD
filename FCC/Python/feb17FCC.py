

def check_eligibility(athlete_weights, sled_weight):
    number_of_persons = len(athlete_weights)
    total_athlete_weight = sum(athlete_weights)

    if number_of_persons == 1:
        min_sled_weight = 162
        max_total_weight = 247
    elif number_of_persons == 2:
        min_sled_weight = 170
        max_total_weight = 390
    elif number_of_persons == 4:
        min_sled_weight = 210
        max_total_weight = 630
    else:
        # Invalid team size
        return "Not Eligible"
    
    total_weight = total_athlete_weight + sled_weight

    if sled_weight < min_sled_weight:
        return "Not Eligible"
    if total_weight > max_total_weight:
        return "Not Eligible"

    return "Eligible"