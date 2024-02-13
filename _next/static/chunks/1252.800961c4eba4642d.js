"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1252],{1252:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});let a=Object.freeze({comment:"\n		The foldings do not currently work the way I want them to. This\n		may be a limitation of the way they are applied rather than the\n		regexps in use. Nonetheless, the foldings will end on the last\n		identically indented blank line following an s-expression. Not\n		ideal perhaps, but it works. Also, the #illegal pattern never\n		matches an unpaired ( as being illegal. Why?! -- Rob Rix\n		\n		Ok, hopefully this grammar works better on quoted stuff now.  It\n		may break for fancy macros, but should generally work pretty\n		smoothly.  -- Jacob Rus\n		\n		I have attempted to get this under control but because of the way folding\n		and indentation interact in Textmate, I am not sure if it is possible. In the\n		meantime, I have implemented Python-style folding anchored at newlines.\n		Additionally, I have made some minor improvements to the numeric constant\n		highlighting. Next up is square bracket expressions, I guess, but that\n		should be trivial. -- ozy`\n	",fileTypes:["scm","ss","sch","rkt"],keyEquivalent:"^~S",name:"scheme",patterns:[{include:"#comment"},{include:"#block-comment"},{include:"#sexp"},{include:"#string"},{include:"#language-functions"},{include:"#quote"},{include:"#illegal"}],repository:{comment:{begin:"(^[ \\t]+)?(?=;)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.scheme"}},end:"(?!\\G)",patterns:[{begin:";",beginCaptures:{0:{name:"punctuation.definition.comment.scheme"}},end:"\\n",name:"comment.line.semicolon.scheme"}]},"block-comment":{begin:"\\#\\|",contentName:"comment",end:"\\|\\#",name:"comment",patterns:[{include:"#block-comment",name:"comment"}]},constants:{patterns:[{match:"#[t|f]",name:"constant.language.boolean.scheme"},{match:"(?<=[\\(\\s])((#e|#i)?[0-9]+(\\.[0-9]+)?|(#x)[0-9a-fA-F]+|(#o)[0-7]+|(#b)[01]+)(?=[\\s;()'\",\\[\\]])",name:"constant.numeric.scheme"}]},illegal:{match:"[()\\[\\]]",name:"invalid.illegal.parenthesis.scheme"},"language-functions":{patterns:[{match:"(?x)\n						(?<=(\\s|\\(|\\[)) # preceded by space or ( \n						( do|or|and|else|quasiquote|begin|if|case|set!|\n						  cond|let|unquote|define|let\\*|unquote-splicing|delay|\n						  letrec)\n						(?=(\\s|\\())",name:"keyword.control.scheme"},{comment:"\n						These functions run a test, and return a boolean\n						answer.\n					",match:"(?x)\n						(?<=(\\s|\\()) # preceded by space or (\n						( char-alphabetic|char-lower-case|char-numeric|\n						  char-ready|char-upper-case|char-whitespace|\n						  (?:char|string)(?:-ci)?(?:=|<=?|>=?)|\n						  atom|boolean|bound-identifier=|char|complex|\n						  identifier|integer|symbol|free-identifier=|inexact|\n						  eof-object|exact|list|(?:input|output)-port|pair|\n						  real|rational|zero|vector|negative|odd|null|string|\n						  eq|equal|eqv|even|number|positive|procedure\n						)\n						(\\?)		# name ends with ? sign\n						(?=(\\s|\\()) # followed by space or (\n					",name:"support.function.boolean-test.scheme"},{comment:"\n						These functions change one type into another.\n					",match:"(?x)\n						(?<=(\\s|\\()) # preceded by space or (\n						( char->integer|exact->inexact|inexact->exact|\n						  integer->char|symbol->string|list->vector|\n						  list->string|identifier->symbol|vector->list|\n						  string->list|string->number|string->symbol|\n						  number->string\n						)\n						(?=(\\s|\\()) # followed by space or (					\n					",name:"support.function.convert-type.scheme"},{comment:"\n						These functions are potentially dangerous because\n						they have side-effects which could affect other\n						parts of the program.\n					",match:"(?x)\n						(?<=(\\s|\\()) # preceded by space or (\n						( set-(?:car|cdr)|				 # set car/cdr\n						  (?:vector|string)-(?:fill|set) # fill/set string/vector\n						)\n						(!)			# name ends with ! sign\n						(?=(\\s|\\()) # followed by space or (\n					",name:"support.function.with-side-effects.scheme"},{comment:"\n						+, -, *, /, =, >, etc. \n					",match:"(?x)\n						(?<=(\\s|\\()) # preceded by space or (\n						( >=?|<=?|=|[*/+-])\n						(?=(\\s|\\()) # followed by space or (\n						",name:"keyword.operator.arithmetic.scheme"},{match:"(?x)\n						(?<=(\\s|\\()) # preceded by space or (\n						( append|apply|approximate|\n						  call-with-current-continuation|call/cc|catch|\n						  construct-identifier|define-syntax|display|foo|\n						  for-each|force|format|cd|gen-counter|gen-loser|\n						  generate-identifier|last-pair|length|let-syntax|\n						  letrec-syntax|list|list-ref|list-tail|load|log|\n						  macro|magnitude|map|map-streams|max|member|memq|\n						  memv|min|newline|nil|not|peek-char|rationalize|\n						  read|read-char|return|reverse|sequence|substring|\n						  syntax|syntax-rules|transcript-off|transcript-on|\n						  truncate|unwrap-syntax|values-list|write|write-char|\n						  \n						  # cons, car, cdr, etc\n						  cons|c(a|d){1,4}r| \n                          \n						  # unary math operators\n						  abs|acos|angle|asin|assoc|assq|assv|atan|ceiling|\n						  cos|floor|round|sin|sqrt|tan|\n						  (?:real|imag)-part|numerator|denominator\n                          \n						  # other math operators\n						  modulo|exp|expt|remainder|quotient|lcm|\n                          \n						  # ports / files\n						  call-with-(?:input|output)-file|\n						  (?:close|current)-(?:input|output)-port|\n						  with-(?:input|output)-from-file|\n						  open-(?:input|output)-file|\n						  \n						  # char-\xabfoo\xbb\n						  char-(?:downcase|upcase|ready)|\n						  \n						  # make-\xabfoo\xbb\n						  make-(?:polar|promise|rectangular|string|vector)\n						  \n						  # string-\xabfoo\xbb, vector-\xabfoo\xbb\n						  string(?:-(?:append|copy|length|ref))?|\n						  vector(?:-length|-ref)\n						)\n						(?=(\\s|\\()) # followed by space or (\n					",name:"support.function.general.scheme"}]},quote:{comment:"\n				We need to be able to quote any kind of item, which creates\n				a tiny bit of complexity in our grammar.  It is hopefully\n				not overwhelming complexity.\n				\n				Note: the first two matches are special cases.  quoted\n				symbols, and quoted empty lists are considered constant.other\n				\n			",patterns:[{captures:{1:{name:"punctuation.section.quoted.symbol.scheme"}},match:"(?x)\n						(')\\s*\n						([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*)\n					",name:"constant.other.symbol.scheme"},{captures:{1:{name:"punctuation.section.quoted.empty-list.scheme"},2:{name:"meta.expression.scheme"},3:{name:"punctuation.section.expression.begin.scheme"},4:{name:"punctuation.section.expression.end.scheme"}},match:"(?x)\n						(')\\s*\n						((\\()\\s*(\\)))\n					",name:"constant.other.empty-list.schem"},{begin:"(')\\s*",beginCaptures:{1:{name:"punctuation.section.quoted.scheme"}},comment:"quoted double-quoted string or s-expression",end:"(?=[\\s()])|(?<=\\n)",name:"string.other.quoted-object.scheme",patterns:[{include:"#quoted"}]}]},"quote-sexp":{begin:"(?<=\\()\\s*(quote)\\s+",beginCaptures:{1:{name:"keyword.control.quote.scheme"}},comment:"\n				Something quoted with (quote \xabthing\xbb).  In this case \xabthing\xbb\n				will not be evaluated, so we are considering it a string.\n			",contentName:"string.other.quote.scheme",end:"(?=[\\s)])|(?<=\\n)",patterns:[{include:"#quoted"}]},quoted:{patterns:[{include:"#string"},{begin:"(\\()",beginCaptures:{1:{name:"punctuation.section.expression.begin.scheme"}},end:"(\\))",endCaptures:{1:{name:"punctuation.section.expression.end.scheme"}},name:"meta.expression.scheme",patterns:[{include:"#quoted"}]},{include:"#quote"},{include:"#illegal"}]},sexp:{begin:"(\\()",beginCaptures:{1:{name:"punctuation.section.expression.begin.scheme"}},end:"(\\))(\\n)?",endCaptures:{1:{name:"punctuation.section.expression.end.scheme"},2:{name:"meta.after-expression.scheme"}},name:"meta.expression.scheme",patterns:[{include:"#comment"},{begin:"(?x)\n						(?<=\\()       # preceded by (\n						(define)\\s+   # define\n						(\\()          # list of parameters\n						  ([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*)\n						  ((\\s+\n						    ([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*|[._])\n						   )*\n						  )\\s*\n						(\\))\n					",captures:{1:{name:"keyword.control.scheme"},2:{name:"punctuation.definition.function.scheme"},3:{name:"entity.name.function.scheme"},4:{name:"variable.parameter.function.scheme"},7:{name:"punctuation.definition.function.scheme"}},end:"(?=\\))",name:"meta.declaration.procedure.scheme",patterns:[{include:"#comment"},{include:"#sexp"},{include:"#illegal"}]},{begin:"(?x)\n						(?<=\\() # preceded by (\n						(lambda)\\s+\n						(\\() # opening paren\n						((?:\n						  ([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*|[._])\n						  \\s+\n						)*(?:\n						  ([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*|[._])\n						)?)\n						(\\)) # closing paren\n					",captures:{1:{name:"keyword.control.scheme"},2:{name:"punctuation.definition.variable.scheme"},3:{name:"variable.parameter.scheme"},6:{name:"punctuation.definition.variable.scheme"}},comment:"\n						Not sure this one is quite correct.  That \\s* is\n						particularly troubling\n					",end:"(?=\\))",name:"meta.declaration.procedure.scheme",patterns:[{include:"#comment"},{include:"#sexp"},{include:"#illegal"}]},{begin:"(?<=\\()(define)\\s([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*)\\s*.*?",captures:{1:{name:"keyword.control.scheme"},2:{name:"variable.other.scheme"}},end:"(?=\\))",name:"meta.declaration.variable.scheme",patterns:[{include:"#comment"},{include:"#sexp"},{include:"#illegal"}]},{include:"#quote-sexp"},{include:"#quote"},{include:"#language-functions"},{include:"#string"},{include:"#constants"},{match:"(?<=[\\(\\s])(#\\\\)(space|newline|tab)(?=[\\s\\)])",name:"constant.character.named.scheme"},{match:"(?<=[\\(\\s])(#\\\\)x[0-9A-F]{2,4}(?=[\\s\\)])",name:"constant.character.hex-literal.scheme"},{match:"(?<=[\\(\\s])(#\\\\).(?=[\\s\\)])",name:"constant.character.escape.scheme"},{comment:"\n						the . in (a . b) which conses together two elements\n						a and b. (a b c) == (a . (b . (c . nil)))\n					",match:"(?<=[ ()])\\.(?=[ ()])",name:"punctuation.separator.cons.scheme"},{include:"#sexp"},{include:"#illegal"}]},string:{begin:'(")',beginCaptures:{1:{name:"punctuation.definition.string.begin.scheme"}},end:'(")',endCaptures:{1:{name:"punctuation.definition.string.end.scheme"}},name:"string.quoted.double.scheme",patterns:[{match:"\\\\.",name:"constant.character.escape.scheme"}]}},scopeName:"source.scheme",uuid:"3EC2CFD0-909C-4692-AC29-1A60ADBC161E",displayName:"Scheme"});var s=[a]}}]);