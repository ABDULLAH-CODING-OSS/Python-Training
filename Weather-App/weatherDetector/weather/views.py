from django.shortcuts import render
import json
import urllib.request

# Create your views here.
def index(request):
    city = ''
    data = {}
    
    if request.method == 'POST':
        city = request.POST.get('city', '')
        try:
            res = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=9aec0585851768f15df0f9ca93ca2cbd').read()
            json_data = json.loads(res)
            
            temp_kelvin = json_data['main']['temp']
            temp_celsius = round(temp_kelvin - 273.15)
            
            data = {
                "country_code": str(json_data['sys']['country']),
                "coordinate": str(json_data['coord']['lon']) + ' ' + str(json_data['coord']['lat']),
                "temp": str(temp_kelvin) + ' K',
                "temperatureCelsius": str(temp_celsius) + '°C',
                "pressure": str(json_data['main']['pressure']),
                "humidity": str(json_data['main']['humidity']),
            }
        except Exception as e:
            data = {'error': str(e)}
    
    return render(request, 'index.html', {'city': city, 'data': data})
