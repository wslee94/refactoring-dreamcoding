class Printer {
  private printerHeader: PrinterHeader
  constructor(printerHeader?: PrinterHeader) {
    this.printerHeader = printerHeader ? printerHeader : new DefaultPrinterHeader;
  }

  print() {
    this.printerHeader.print()
  }
}

interface PrinterHeader {
  print(): void;
}

class DefaultPrinterHeader implements PrinterHeader {
  print() {
    console.log("기본적인 출력!");
  }
}

class RedPrinterHeader implements PrinterHeader {
  print() {
    console.log("🛑 출력!");
  }
}

const printers = [new Printer(), new Printer(new RedPrinterHeader())];
printers.forEach((printer) => printer.print());
