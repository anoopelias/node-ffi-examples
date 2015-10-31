CC = clang

PREFIX = $(DESTDIR)/usr/local
LIBDIR = $(PREFIX)/lib

TARGET = max
SOURCES = $(shell echo *.c)

$(TARGET):
	$(CC) $(SOURCES) $(LIBDIR)/libmax.dylib  -o $(TARGET)

clean:
	-rm $(TARGET)

