def calculate_calories(age, gender, weight_kg, height_cm, activity_level):
    BMR_CONSTANT_MALE = 88.362
    BMR_CONSTANT_FEMALE = 447.593
    HEIGHT_CONSTANT = 9.247
    WEIGHT_CONSTANT = 3.098
    AGE_CONSTANT = 4.330
    activity_levels = {
        "sedentary": 1.2,
        "lightly active": 1.375,
        "moderately active": 1.55,
        "very active": 1.725,
        "super active": 1.9,
    }

    if gender.lower() == "male":
        bmr = BMR_CONSTANT_MALE + (WEIGHT_CONSTANT * weight_kg) + (HEIGHT_CONSTANT * height_cm) - (AGE_CONSTANT * age)
    else:
        bmr = BMR_CONSTANT_FEMALE + (WEIGHT_CONSTANT * weight_kg) + (HEIGHT_CONSTANT * height_cm) - (AGE_CONSTANT * age)

    tdee = bmr * activity_levels.get(activity_level.lower(), 1.2)

    return tdee
age = int(input("Enter your age: "))
gender = input("Enter your gender (male/female): ")
weight_kg = float(input("Enter your weight in kilograms: "))
height_cm = float(input("Enter your height in centimeters: "))
activity_level = input("Enter your activity level (sedentary/lightly active/moderately active/very active/super active): ")
calories_needed = calculate_calories(age, gender, weight_kg, height_cm, activity_level)
print(f"Your estimated daily caloric needs are {calories_needed:.2f} calories.")
