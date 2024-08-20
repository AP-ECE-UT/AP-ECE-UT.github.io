---
sidebar_position: 3
---

# Makefile

## Makefile چیست؟

در یک پروژه چندفایلی، داشتن یک سیستم ساخت که بتواند فایل‌ها را کامپایل و لینک کند بسیار مهم است. این کار معمولا با استفاده از یک `makefile` انجام می‌شود که شامل دستورالعمل‌هایی برای کامپایل و لینک کردن فایل‌ها است. `makefile` وابستگی‌ها بین فایل‌ها و دستورات برای کامپایل و لینک کردن فایل‌ها را مشخص می‌کند. این کار امکان کامپایل و لینک کردن آسان فایل‌ها را فراهم می‌کند و اطمینان می‌دهد که پروژه به درستی ساخته شده است.

## مثال

### مثال اول

یک `makefile` ساده برای یک پروژه ++C ممکن است به این شکل باشد:

```makefile
CXX = g++
CXXFLAGS = -std=c++11 -Wall

SRCS = main.cpp audio_player.cpp playlist.cpp song.cpp
OBJS = $(SRCS:.cpp=.o)
EXEC = music_player

all: $(EXEC)

$(EXEC): $(OBJS)
    $(CXX) $(CXXFLAGS) -o $@ $(OBJS)

%.o: %.cpp
    $(CXX) $(CXXFLAGS) -c $< -o $@

clean:
    rm -f $(OBJS) $(EXEC)
```

در این `makefile`، متغیر `CXX` کامپایلر ++C را مشخص می‌کند و متغیر `CXXFLAGS` پرچم‌های کامپایلر را مشخص می‌کند. متغیر `SRCS` شامل لیست فایل‌های منبع است و متغیر `OBJS` شامل لیست فایل‌های شی است. متغیر `EXEC` شامل نام فایل اجرایی است که باید تولید شود. هدف `all` مشخص می‌کند که فایل اجرایی `music_player` باید ساخته شود. خط `$(EXEC): $(OBJS)` وابستگی‌ها بین فایل اجرایی و فایل‌های شی و دستور لینک کردن فایل‌های شی به فایل اجرایی را مشخص می‌کند. خط `%.o: %.cpp` وابستگی‌ها بین فایل‌های منبع و فایل‌های شی و دستور کامپایل فایل‌های منبع به فایل‌های شی را مشخص می‌کند. هدف `clean` دستور حذف فایل‌های شی و فایل اجرایی را مشخص می‌کند. این `makefile` می‌تواند برای کامپایل و لینک کردن فایل‌ها در پروژه `music_player` استفاده شود. دستور `make` می‌تواند برای ساخت پروژه استفاده شود و دستور `make clean` می‌تواند برای پاکسازی پروژه استفاده شود.

### مثال دوم

یک مثال ساده‌تر از یک `makefile` برای یک پروژه ++C ممکن است به این شکل باشد:

```makefile
CXX = g++
CXXFLAGS = -std=c++11 -Wall

all: music_player

music_player: main.o audio_player.o playlist.o song.o
    $(CXX) $(CXXFLAGS) main.o audio_player.o playlist.o song.o -o music_player

main.o: main.cpp audio_player.hpp playlist.hpp song.hpp
    $(CXX) $(CXXFLAGS) -c main.cpp -o main.o

playlist.o: playlist.cpp playlist.hpp song.hpp audio_player.hpp
    $(CXX) $(CXXFLAGS) -c playlist.cpp -o playlist.o

audio_player.o: audio_player.cpp audio_player.hpp song.hpp
    $(CXX) $(CXXFLAGS) -c audio_player.cpp -o audio_player.o

song.o: song.cpp song.hpp
    $(CXX) $(CXXFLAGS) -c song.cpp -o song.o

clean:
    rm -f music_player *.o
```

<br/><div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="https://i.redd.it/nbezrlsjl6oa1.jpg" alt="make file syntax" width="600"/>
</div><br/>

در این `makefile`، متغیر `CXX` کامپایلر ++C را مشخص می‌کند و متغیر `CXXFLAGS` پرچم‌های کامپایلر را مشخص می‌کند. هدف `all` مشخص می‌کند که فایل اجرایی `music_player` باید ساخته شود. خط `music_player: main.o audio_player.o playlist.o song.o` وابستگی‌ها بین فایل اجرایی و فایل‌های شی و دستور لینک کردن فایل‌های شی به فایل اجرایی را مشخص می‌کند. خط `main.o: main.cpp audio_player.hpp playlist.hpp song.hpp` وابستگی‌ها بین فایل‌های منبع و فایل‌های شی و دستور کامپایل فایل‌های منبع به فایل‌های شی را مشخص می‌کند. هدف `clean` دستور حذف فایل‌های شی و فایل اجرایی را مشخص می‌کند. این `makefile` می‌تواند برای کامپایل و لینک کردن فایل‌ها در پروژه `music_player` استفاده شود. دستور `make` می‌تواند برای ساخت پروژه استفاده شود و دستور `make clean` می‌تواند برای پاکسازی پروژه استفاده شود.

سیستم‌های ساخت دیگری نیز وجود دارند که می‌توانند برای کامپایل و لینک کردن پروژه‌های چندفایلی استفاده شوند، مانند `CMake`، `SCons` و `Autotools`. انتخاب سیستم ساخت بستگی به نیازهای خاص پروژه و آشنایی توسعه‌دهندگان با سیستم ساخت دارد.