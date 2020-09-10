declare module 'fluentreports' {
  export class Report {
    constructor(destination: string, options?: Options);

    // This allows you to set userData on the report
    // that you might want at some later point in the
    // report-- this is rarely used.
    userData(data: Object): Report;

    // This allows you to set a formatting function to
    // deal with any total values and formatting
    // TODO - totalFormatter(function(data, callback(err, data) { }) { } ): Report;
    totalFormatter(func: Function): Report;

    // THIS IS MANDANTORY - you need to set a data object
    // otherwise there is no point to the report.
    // Example:
    // MyReportObject.data([{ id: 1, name: 'Nathanael' }, { id: 2, name: 'Anderson' }]);
    data(data: number | string | Object | Object[]): Report;

    // This is so you can set a key or keys that get
    // passed to sub - report data query
    // functions / class objects.
    // Example:
    // MyReportObject.keys("id");
    keys(keys: string[]): Report;

    // This is used to add a sub - report; however you
    // can use the easier method of
    // "new Report(parentReport)" rather this
    // "parentReport.addReport(x)"
    addReport(report: Report, options: { isSibling: boolean }): Report;

    // This allows you to set the pdf information and
    // can be passed in as one of the
    // Report(..., OPTIONS)
    info(info: Object): Report;

    // This is used so that the report system know how
    // to output each detail record.This is used in most
    // reports; but in some you might not need it.
    // Examples
    // MyReportObject.detail([["name", 120], ["address", 200], ["state", 20]]);
    // or
    // MyReportObject.detail("{{name}} lives in the state of {{state}}");
    detail(output: Output): Report;

    // This is printed for the FIRST PAGE ONLY(if set);
    // this prints first!
    // Example
    // MyReportObject.titleHeader("This is my Cool Report");
    titleHeader(output: Output, options: Page): Report;

    // This is printed for EVERY page except if the
    // titleHeader is set, if the titleHeader is set
    // then this header is skipped on the very first
    // page; this prints first on the page!
    // Example
    // MyReportObject.pageHeader(["This is my", "cool report"]);
    pageHeader(output: Output, options: Page): Report;

    // This is printed as the header object to any group
    // objects.So while grouping you might need a
    // header for who / what this is grouping on.
    header(output: Output, options?: Page): Report;

    // This is printed as the footer object on the final
    // page(if set).
    finalSummary(output: Output, options: Page): Report;

    // This is printed as the footer object on all
    // pages(except for the last page if the
    // finalSummary is set).
    // Example
    // MyReportObject.pageFooter(function (Rpt) { Rpt.print("Hey, this page is done!"); });
    pageFooter(output: Output, options?: Page): Report;

    // This is printed as the footer object to any group
    // objects.So while grouping you might need a
    // footer for who / what this is grouping on.
    footer(output: Output, options: Page): Report;

    // This allows you to change the output type of the
    // report; this is rarely used as when you create
    // the report you set it at creation.
    outputType(type: 'file' | 'pipe' | 'buffer'): Report;

    // This is what actually starts the rendering of
    // the document when you are done setting it up
    // with all these class methods.
    // Example
    // MyReportObject.render(function (Err, name) { console.log("The report was saved to", name); });
    render(callback: Function): Report;
    // callback - this is called when the report is done
    // being rendered; the callback will be

    // This prints out the structure of your report for
    // debugging purposes to the console; it can see if
    // you messed up your groupings or some other issues
    // with your layout of the report.
    printStructure(asRendered: boolean): Report;

    // Gets or sets landscape or portrait mode, This
    // can be passed in as a Report(..., OPTIONS)
    landscape(landscape: boolean): Report;

    // Gets or sets the paper size, This can be passed
    // in as a Report(..., OPTIONS)
    paper(paper: Paper): Report;

    // This gets or sets the default font for the
    // report, This can be passed in as a
    // Report(..., OPTIONS)
    font(font: Font): Report;

    // This sets the Default font size for the
    // report, This can be passed in as a
    // Report(..., OPTIONS)
    fontSize(size: number): Report;

    // This allows you to register a external font to
    // use in your report
    // Example:
    // MyReportObject.registerFont("Aparajita", { normal: './aparaj.ttf', bold: './aparajb.ttf', 'italic': './aparaji.ttf' });
    registerFont(name: string, definition: FontDefinition): Report;

    // This allows you to set all the margins or some
    // of them, This can be passed in as a
    // Report(..., OPTIONS)
    margins(margins: number | Margins): Report;

    // This will cause the print dialog to show up when
    // you first open the pdf document, This can be
    // passed in as a Report(..., OPTIONS)
    autoPrint(autoPrint: boolean): Report;

    // This will cause the pdf document to go to full
    // screen on opening it up, This can be passed in
    // as a Report(..., OPTIONS)
    fullScreen(fullScreen: boolean): Report;

    // This will print negatives as (20) rather
    // than - 20, This can be passed in as a
    // Report(..., OPTIONS)
    negativeParentheses(negativeParentheses: boolean): Report;

    // This will import the "pdfFile" into this report
    importPDF(pdfFile: string): Report;

    // This will allow you to create grouping on fields
    // so that you can have group headers, footers,
    // details for each group of records.
    // IMPORTANT: this will RETURN a brand NEW ReportGroup object, which will then allow you to customize it with any of these commands listed here.Please keep this in mind when doing function chaining.
    groupBy(field: string, options): Report;

    // This allows you to have a running Sum of the
    // field; this value is propagated through the
    // totals system allowing access to the correct
    // total value per group.
    sum(field: string): Report;

    // This allows you to have a running minimum value
    // of the field; this value is propagated through
    // the totals system allowing access to the correct
    // total value per group.
    min(field: string): Report;

    // This allows you to have a running maximum value
    // of the field; this value is propagated through
    // the totals system allowing access to the correct
    // total value per group.
    max(field: string): Report;

    // This allows you to have a running count of the
    // field; this value is propagated through the
    // totals system allowing access to the correct
    // total value per group.
    count(field: string): Report;

    // This allows you to have a running average of the
    // field; this value is propagated through the
    // totals system allowing access to the correct
    // total value per group.
    average(field: string): Report;
  }

  // Rendering Commands
  // These commands are available to the header,
  // title header, page header, page summary,
  // page footer, footer, and detail functions
  // while the report is running.The first object
  // passed to your function is the ReportRenderer
  // object; this object has the following methods
  // you can run.
  export class ReportRenderer {

    // This displays a image on the current page
    image(name: string, options: {
      x: number;
      y: number;
      width: number;
      height: number;
      scale: number;
      fit: boolean;
      align: 'left' | 'right' | 'center';
      valign: 'top' | 'center' | 'bottom';
    }): void;

    // This allow you to get or change the default
    // font(and optionally change the font size)
    font(name: Font, size?: number): void;

    // This allows you to get or change the current
    // font size
    fontSize(size?: number): void;

    // This sets the font to be Bold; if the font
    // supports Bold & Italic at the same time and you
    // already have Italic set, it will set it to
    // bold - italic.
    fontBold(): void;

    // This sets the font to be Italic; if the font was
    // already set to bold AND the font supports Bold
    // and Italic it will add italic to the bold fond,
    // otherwise it will just make it italic.
    fontItalic(): void;

    // This resets the font back to normal; eliminating
    // any Bold and Italic attributes
    fontNormal(): void;

    // This sets the fill & stroke colors
    fillAndStroke(fillColor: string, strokeColor?: string): void;

    // Forces a fill with either the current color or
    // the optionally provided color.
    fill(color?: string): void;

    // Gets or sets the fill color
    fillColor(color?: string): void;

    // Gets or sets the current fill opacity
    fillOpacity(opacity?: number): void;

    // This set or gets the stroke color
    strokeColor(color?: string): void;

    // This is used to switch between - 30 and(30) for
    // display of negative numbers.
    setNegativeParentheses(negativeParentheses?: boolean): void;

    // This will allow you to override the default
    // margins and set the margins for the NEXT page
    setMargins(margins: number | Margins): void;

    // This allows you to get or change the paper for
    // the NEXT page
    paper(paper?: Paper): void;

    // This allows you to get or change the landscape
    // mode for the NEXT page
    landscape(landscape?: boolean): void;

    // Allows you to save the current state of the
    // engine-- This saves font, colors, and the x
    // coordinate.This is a STACK, so you can save
    // multiple states; and then restore them.Make
    // sure any state you save you use a resetState or
    // deleteState on afterwords, as the engine uses
    // this code a lot to keep things correct.
    saveState(): void;

    // This resets the state of the engine to the last
    // saved state in the saved stack.
    resetState(): void;

    // This deletes the last saved state of the engine.
    deleteState(): void;

    // This can tell you if the page has any changes on
    // it.
    hasChanges(includeHeader?: boolean): void;

    // this returns the current page that is being
    // worked on.
    currentPage(): number;

    // This adds a new page for you to start working
    // on.Please note; if you are using ASYNC functions
    // then you must have a callback function for when
    // the newPage is done, it will call your callback
    // so you can continue.
    // Examples:
    // R.newPage();
    // R.newPage(function () { R.print("Hi, I'm on a new page"); });
    newPage(saveOptions?: boolean, callback?: Function): void;

    // This runs the standard header or footer code so
    // you can keep the default header / footers but
    // make some minor changes
    standardHeader(text: string | string[][], callback?: Function): void;
    standardFooter(text: string | string[][], callback?: Function): void;

    // This returns the current X or Y coordinate
    getCurrentX(): number;
    getCurrentY(): number;

    // This sets the current X or Y coordinate
    setCurrentX(x: number): void;
    setCurrentY(y: number): void;

    // This sets or gets the current X or Y coordinates
    currentX(x?: number): number | null;
    currentY(y?: number): number | null;

    // This adds a number to either the X or Y
    // coordinate
    addX(x?: number): void;
    addY(y?: number): void;

    // This adds a newLine or multiple new lines
    newLine(count?: number, callback?: Function): void;

    // This calculates how long this string will be
    // with the current font and font size.
    widthOfString(value: string): number;

    // This tells you how big a current string will be
    // using the current font and font size; it doesn't
    // actually need a string to tell you this as all
    // string printed using this font & font size will
    // use this space.
    heightOfString(): number;

    // This allow you to print a line the size of the
    // last band command
    // TODO - thickness - the thickness of the line; defaults to 1
    bandLine(thickness?: number, verticalGap?: number): void;

    // This prints a line or box from startX, startY to
    // endX, endY
    line(startX: number, startY: number, endX: number, endY: number, options: {
      fillOpacity: numebr; // the Opacity
      borderColor: string; // the border color
      fillColor: string; // The fill color
      thickness: number; // the Line thickness
      textColor: string; // the text color
      fill: boolean; // to fill the shape
    }): void;
    box(startX: number, startY: number, endX: number, endY: number, options: {
      fillOpacity: numebr; // the Opacity
      borderColor: string; // the border color
      fillColor: string; // The fill color
      thickness: number; // the Line thickness
      textColor: string; // the text color
      fill: boolean; // to fill the shape
    }): void;

    // This prints a circle from startX, startY using
    // the radius
    circle(startX: number, startY: number, radius: number, options: {
      fillOpacity: number; // the Opacity
      borderColor: string; // the border color
      fillColor: string; // The fill color
      thickness: number; // the Line thickness
      textColor: string; // the text color
      fill: boolean; // to fill the shape
    }): void;

    // This sets or gets the gap between lines
    lineWidth(width?: number): number;

    // Gets the last width of the band that was printed.
    getLastBandWidth(): number;

    // This returns the minimum or maximum X or Y
    // coordinate allowed.
    maxX(): number;
    maxY(): number;
    minX(): number;
    minY(): number;

    // This will print the date time at the current
    // location or header or footer locations
    printedAt(options: {
      align: 'left' | 'right' | 'center';
      header: boolean; // print in the header
      footer: boolean; // print in the footer
      text: string; // defaults to: "Printed At: {0}:{1}{2}\non {3}" where { 0 } is replaces with Hour, { 1} minutes, { 2} am / pm and { 3 } the current date.
    }): void;

    // This will print the current page number at the
    // current location, or the header / footer
    // locations
    // Examples: "Page {0} of {1}" will print, Page 1 of 200 on page 1, and "Page 55 of 200" on page 55 if the report had 200 pages.
    pageNumber(options: {
      align: 'left' | 'right' | 'center';
      header: boolean; // print in the header
      footer: boolean; // print in the footer
      text: string; // defaults to: "Page: {0}" where {0} is the current page number
    }): void;

    // Imports a PDF in the current location, if this
    // page has any printing on it - it will end this
    // page and import after it.
    importPDF(name: string): void;

    // This is one of the primary methods to put any
    // text of the page; you pass it your text and any
    // options you want applied to the text
    print(text: string | string[], options?: {
      x?: number; // x coordinate to print at
      y?: number; // y coordinate to print at
      addX?: number; // add this x to the x coord before printing
      addY?: number; // add this y to the y coord before printing
      align?: 'left' | 'center' | 'right';
      textWidth?: number; // the gap between characters
      width?: number; // the maximum size you want the string to be; it will wrap it after this.
      textColor?: string; // the font color of the text
      underline?: boolean; // make this text underlined
      strike?: boolean; // make this text striked through
      fontSize?: number; // the font Size to use
      fill?: string; // the background fill color
      link?: string; // make this text a link, this is the url that the click will activate
      font?: Font; // the font to use
      fontBold?: boolean; // to be bold
      fontItalic?: boolean; // to be italic
      ignoreEmptyStrings?: string; // ignore printing any empty strings in arrays
      opacity?: number; // the opacity of the text
      rotate?: number; // the rotation of the text(Rotated text can exceed page dimensions)
    }, callback?: Function): void;

    // This is the other primary method of displaying
    // data on a report; this creates bands of cells
    // like a spreadsheet
    // TODO - dataIn - this is an array of each cell; each cell can override the below options with most of the below options so[{ data: "Data to Print", width: "width of cell", align: "alignment", border: 1, ...}, { data:...}, ...]
    band(dataIn, options?: {
      gutter?: boolean; // gutter between cells
      collapse?: boolean; // (true) or false; collapse the borders between cells
      border?: number; // the width of all the border, it can also be a object with specifics for each side { left?: 2, right?: 0, top?: 1, bottom?: 1 }
      dash?: boolean; // true or(false); make the border line dashed
      borderColor?: string; // the color of the border
      fill?: string; // the fill color of the cell
      fillOpacity?: number; // fill Opacity decimal value of 0 to 1.
      padding?: number; // padding inside the cell
      x?: number; // X coordinate
      y?: number; // Y coordinate
      addX?: number; // add to the X coordinate
      addY?: number; // add to the Y coordinate
      font?: Font; // font to use
      fontBold?: boolean; // true or(false)
      fontItalic?: boolean; // true or(false)
      textColor?: string; // the text color
      link?: string; // the url to link this cell too.
    }, callback?: Function): void;

    // This is exactly the same as the band() command; other than it will skip printing any repeated data; so if row 1 has the name "Nathanael" and row 2 has the name "Nathanael" it will skip printing row 2's "Nathanael".
    suppressionBand(dataIn, options, callback: Function): void;
    // Description
    // Parameters
    // TODO - SAME as the above band() command other than it has one addition option
    // TODO - duplicatedTextValue - this is the value to print in the suppressed cell; defaults to one quote(")
  }

  export interface Options {
    landscape?: boolean; // false
    paper?: Paper; // letter
    font?: Font; // Helvetica
    fontSize?: number; // 12
    margins?: number | Margins; // 72
    autoPrint?: boolean; // false
    fullScreen?: boolean; // false
    negativeParentheses?: boolean; // false
    info?: Object;
  }

  export type Paper = 'letter' | 'legal' | 'Executive' | 'Folio' | 'Tabloid'
    | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'A7' | 'A8' | 'A9' | 'A10'
    | 'B1' | 'B2' | 'B3' | 'B4' | 'B5' | 'B6' | 'B7' | 'B8' | 'B9' | 'B10'
    | 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6' | 'C7' | 'C8' | 'C9' | 'C10'
    | 'RA0' | 'RA1' | 'RA2' | 'RA3' | 'RA4'
    | 'SRA0' | 'SRA1' | 'SRA2' | 'SRA3' | 'SRA4';

  export type Font = 'Helvetica' | 'Courier' | 'Times-Roman' | 'Symbol' | 'ZapfDingbats';

  export interface Margins {
    top?: number = 72;
    right?: number = 72;
    bottom?: number = 72;
    left?: number = 72;
  }

  export interface Page {
    pageBreak: boolean;
    pageBreakBefore: boolean;
    pageBreakAfter: boolean;
  }

  export type Output = string | string[][] | Function;

  export interface FontDefinition {
    normal: string;
    bold: string;
    bolditalic: string;
    italic: string;
  }
}
