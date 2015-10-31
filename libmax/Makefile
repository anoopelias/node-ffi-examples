CC = clang

PREFIX = $(DESTDIR)/usr/local
LIBDIR = $(PREFIX)/lib

TARGET = libmax.dylib
SOURCES = $(shell echo src/*.c)
HEADERS = $(shell echo include/*.h)

$(TARGET):
	$(CC) -dynamiclib $(SOURCES) -o $(TARGET)

clean:
	-rm $(TARGET)

install: $(TARGET)
	install $(HEADERS) $(PREFIX)/$(HEADERS)
	install $(TARGET) $(LIBDIR)/$(TARGET)

uninstall:
	-rm $(LIBDIR)/$(TARGET)
	-rm $(PREFIX)/$(HEADERS)

