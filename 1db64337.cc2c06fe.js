(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),r=(n(0),n(84)),o={title:"An overview of the RISE language, and the Shine compiler",sidebar_label:"Overview"},l={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"An overview of the RISE language, and the Shine compiler",description:"Starting from a High-Level RISE Program, and an ELEVATE Optimization",source:"@site/docs/overview.md",slug:"/overview",permalink:"/doc/overview",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Technical Setup",permalink:"/doc/setup"}},p=[{value:"High-Level Program",id:"high-level-program",children:[]},{value:"Optimization Strategy",id:"optimization-strategy",children:[]},{value:"Rewriting",id:"rewriting",children:[]},{value:"Low-Level Program",id:"low-level-program",children:[]},{value:"Code Generation",id:"code-generation",children:[]},{value:"Optimized Program",id:"optimized-program",children:[]}],m={toc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Starting from a High-Level RISE Program, and an ELEVATE Optimization\nStrategy the Shine compiler rewrites the high-level program as specified\nby the optimization strategy into a Low-Level RISE Program that encodes\nall implementation and optimization decisions explicitly. "),Object(r.b)("p",null,"The code generator processes the low-level program to generate\nthe final Optimized C, OpenMP, OpenCL, or CUDA Program."),Object(r.b)("h2",{id:"high-level-program"},"High-Level Program"),Object(r.b)("p",null,"This is an example of a high-Level program written in RISE.\nThe shown example is the multiplication of a ",Object(r.b)("inlineCode",{parentName:"p"},"nxk"),"-matrix called ",Object(r.b)("inlineCode",{parentName:"p"},"A"),"\nand a mxk-matrix called ",Object(r.b)("inlineCode",{parentName:"p"},"B"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"val highLevelProgram: ToBeTyped[Rise] =\n    depFun((n: Nat, m: Nat, k: Nat) =>\n      fun(n`.`k`.`f32)(A => fun(k`.`m`.`f32)(B =>\n        A |> map(fun(rowOfA =>\n          B |> transpose |> map(fun(colOfB =>\n            zip(rowOfA)(colOfB) |>\n              map(fun(x => fst(x) * snd(x))) |>\n              reduce(add)(l(0.0f)) )) )) )) )\n")),Object(r.b)("p",null,"The matrix dimensions are represented as part of the type of the matrices:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the type of matrix ",Object(r.b)("inlineCode",{parentName:"li"},"A")," is ",Object(r.b)("inlineCode",{parentName:"li"},"n.k.f32")),Object(r.b)("li",{parentName:"ul"},"the type of matrix ",Object(r.b)("inlineCode",{parentName:"li"},"B")," is ",Object(r.b)("inlineCode",{parentName:"li"},"k.m.f32"),"\nThe identifiers used in the type (here: ",Object(r.b)("inlineCode",{parentName:"li"},"n"),", ",Object(r.b)("inlineCode",{parentName:"li"},"m"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"k"),") are introduced\nand scoped by ",Object(r.b)("inlineCode",{parentName:"li"},"depFun"))),Object(r.b)("p",null,"The matrix values are introduced and scoped as function parameters by two\nnested ",Object(r.b)("inlineCode",{parentName:"p"},"fun"),"s"),Object(r.b)("p",null,"The body of the nested functions represents the computation of the matrix\nmatrix multiplication:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"two nested ",Object(r.b)("inlineCode",{parentName:"li"},"map")," primitives apply the dot product to each combination\nof a ",Object(r.b)("inlineCode",{parentName:"li"},"rowOfA")," and a ",Object(r.b)("inlineCode",{parentName:"li"},"colOfB")),Object(r.b)("li",{parentName:"ul"},"the dot product computation is represented by a composition of the\n",Object(r.b)("inlineCode",{parentName:"li"},"zip"),", ",Object(r.b)("inlineCode",{parentName:"li"},"map"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"reduce")," primitives")),Object(r.b)("p",null,"We often prefer the pipe notation ",Object(r.b)("inlineCode",{parentName:"p"},"(x |> f)")," over the equivalent function\ncall notation ",Object(r.b)("inlineCode",{parentName:"p"},"f(x)")," as it allows expressions to be read from\nleft-to-right and top-to-bottom."),Object(r.b)("p",null,"Primitives (such as ",Object(r.b)("inlineCode",{parentName:"p"},"map"),", ",Object(r.b)("inlineCode",{parentName:"p"},"transpose"),", ",Object(r.b)("inlineCode",{parentName:"p"},"zip"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"reduce"),") are functions\nwith types that explain their possible usage and with a clearly defined\ndenotational semantics:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[x1, ..., xn] |> map(f) == [f(x1), ..., f(xn)]")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[ [x11, ...., x1n], ..., [xm1, ..., xmn] ] |> transpose\n    == [ [x11, ...., xm1], ..., [x1n, ..., xmn] ]")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"zip([x1, ..., xn])([y1, ..., yn]) == [(x1, y1), ..., (xn, yn)]")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[x1, ..., xn] |> reduce(op)(init) == init op x1 op ... op xn"))),Object(r.b)("p",null,"The resulting RISE expression has the Scala type ",Object(r.b)("inlineCode",{parentName:"p"},"ToBeTyped[Rise]"),"\nOn conversion to the underlying Scala type ",Object(r.b)("inlineCode",{parentName:"p"},"Rise")," type inference will be\nperformed automatically."),Object(r.b)("p",null,"We can easily print the internal representation of the high-level program:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"println(highLevelProgram.toExpr)\n//  \u039bn1:nat \u039bn2:nat \u039bn3:nat \u03bbe4 \u03bbe5 map\n//                                  \u251d \u03bbe6 map\n//                                  \u2502     \u251d \u03bbe7 reduce add 0.0000\n//                                  \u2502     \u2502     \u2515 map <\u03bbe11. mul (fst e11) (snd e11)> (zip e6 e7)\n//                                  \u2502     \u2515 transpose e5\n//                                  \u2515 e4\n")),Object(r.b)("h2",{id:"optimization-strategy"},"Optimization Strategy"),Object(r.b)("p",null,"This is an example of an optimization strategy written in ELEVATE.\nIt describes that the outermost map computation will be performed in\nparallel as well as that the nested map computation and the reduction\nwill be performed sequentially."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"val optimizationStrategy: Strategy[Rise] =\n    (`map |-> mapPar`       `@` outermost(isPrimitive(map)))  `;`\n    (`map |-> mapSeq`       `@` outermost(isPrimitive(map)))  `;`\n    (`reduce |-> reduceSeq` `@` everywhere)\n")),Object(r.b)("p",null,"The shown example demonstrates one possible way to rewrite the high-level\nRISE program above into a low-level RISE program from which code can be\ngenerated."),Object(r.b)("p",null,"Strategies in ELEVATE are functions with the following specific type:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"    type Strategy[P] = P => RewriteResult[P]\n")),Object(r.b)("p",null,"The return type ",Object(r.b)("inlineCode",{parentName:"p"},"RewriteResult[P]")," indicates the two possible outcomes of\napplying a rewrite strategy to a program of type ",Object(r.b)("inlineCode",{parentName:"p"},"P"),": either the program\nhas been successfully rewritten, or the rewrite strategy failed."),Object(r.b)("p",null,"Strategies in ELEVATE are written as compositions of smaller strategies."),Object(r.b)("p",null,"The simplest strategies are rewrite rules that replace an expression\nwith another expression. An example of such a rule is the ",Object(r.b)("inlineCode",{parentName:"p"},"map |-> mapPar"),"\nstrategy that replaces an occurrence of the ",Object(r.b)("inlineCode",{parentName:"p"},"map")," primitive with the\n",Object(r.b)("inlineCode",{parentName:"p"},"mapPar")," primitive indicating that the computation of the map should be\nperformed in parallel."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"outermost")," and ",Object(r.b)("inlineCode",{parentName:"p"},"everywhere")," strategies are examples of traversals\nthat describe where other strategies should be applied.\nWe can use the ",Object(r.b)("inlineCode",{parentName:"p"},"@")," notation to compose them as shown in the example."),Object(r.b)("p",null,"We can also easily print the internal representation of the\noptimization strategy:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"println(optimizationStrategy)\n// seq((seq((outermost((is(map)),(mapPar)),outermost((is(map)),(mapSeq)))),everywhere((reduceSeq))))\n")),Object(r.b)("p",null,"This alternative strategy explicitly fused the innermost map and reduce\npatterns. It then turns every remaining map into a sequential map, and the\nremaining reduce into a sequential reduction."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"val anotherOptimizationStrategy: Strategy[Rise] =\n    (`map >> reduce |-> reduce` `@` everywhere) `;`\n    (`map |-> mapSeq`           `@` everywhere) `;`\n    (`reduce |-> reduceSeq`     `@` everywhere)\n")),Object(r.b)("p",null,"This strategy vectorizes the computation of the innermost map pattern\nthat itself will be performed sequentially and stores its temporary output\nas vectors. It will then use the optimization and implementation decisions\ndescribed in the initial optimization strategy."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"val yetAnotherOptimizationStrategy: Strategy[Rise] =\n    innermost(isAppliedMap)(\n      `map(f) |-> asVector >> map(f_vec) >> asScalar`(4) `;`\n      (`map |-> mapSeq` `@` innermost(isPrimitive(map))) `;`\n      storeTempAsVectors\n    ) `;`\n    optimizationStrategy\n")),Object(r.b)("h2",{id:"rewriting"},"Rewriting"),Object(r.b)("p",null,"This function performs the rewriting by applying the given\noptimization strategy to the given program."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"def rewriting(program: Rise, strategy: Strategy[Rise]): Rise = {\n    // we know that the shown strategies will always succeed, therefore, it is\n    // ok to unwrap the final RewriteResult using .get\n    strategy(program).get\n  }\n")),Object(r.b)("h2",{id:"low-level-program"},"Low-Level Program"),Object(r.b)("p",null,"This is the low-level RISE program that is produced by rewriting the\nhigh-level program using one of the optimization strategies"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"val lowLevelProgram: Rise =\n    rewriting(highLevelProgram, optimizationStrategy)\n")),Object(r.b)("h2",{id:"code-generation"},"Code Generation"),Object(r.b)("p",null,"This function performs the code generation translating the given\nlow-level program to optimized code."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"def codeGeneration(program: Rise): String = {\n    gen.openmp.function.asStringFromExpr(program)\n    // similar API for generating C or OpenCL code exist:\n    // gen.c.function.asStringFromExpr(program)\n    // gen.opencl.kernel.asStringFromExpr(program)\n  }\n")),Object(r.b)("h2",{id:"optimized-program"},"Optimized Program"),Object(r.b)("p",null,"The final optimized program in C, OpenMP, or OpenCL."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},'val optimizedProgram: String =\n    codeGeneration(lowLevelProgram)\n// optimizedProgram: String = """\n// #include <stdint.h>\n// \n// \n// void foo(float* output, int n1, int n2, int n3, float* e4, float* e5){\n//   #pragma omp parallel for\n//   for (int i_208 = 0;(i_208 < n1);i_208 = (1 + i_208)) {\n//     /* mapSeq */\n//     for (int i_209 = 0;(i_209 < n2);i_209 = (1 + i_209)) {\n//       /* reduceSeq */\n//       {\n//         float x191;\n//         x191 = 0.0f;\n//         for (int i_210 = 0;(i_210 < n3);i_210 = (1 + i_210)) {\n//           x191 = (x191 + (e4[(i_210 + (i_208 * n3))] * e5[(i_209 + (i_210 * n2))]));\n//         }\n//         \n//         output[(i_209 + (i_208 * n2))] = x191;\n//       }\n//       \n//     }\n//     \n//   }\n//   \n// }\n// \n// """\n')))}s.isMDXComponent=!0}}]);