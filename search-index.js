var searchIndex = JSON.parse('{\
"cc":{"doc":"A library for build scripts to compile custom C code","i":[[3,"Build","cc","A builder for compilation of a native library.",null,null],[3,"Error","","Represents an internal error that occurred, with an…",null,null],[3,"Tool","","Configuration used to represent an invocation of a C…",null,null],[0,"windows_registry","","A helper module to probe the Windows Registry when looking…",null,null],[4,"VsVers","cc::windows_registry","A version of Visual Studio",null,null],[13,"Vs12","","Visual Studio 12 (2013)",0,null],[13,"Vs14","","Visual Studio 14 (2015)",0,null],[13,"Vs15","","Visual Studio 15 (2017)",0,null],[13,"Vs16","","Visual Studio 16 (2019)",0,null],[5,"find","","Attempts to find a tool within an MSVC installation using…",null,[[],[["command",3],["option",4]]]],[5,"find_tool","","Similar to the `find` function above, this function will…",null,[[],[["option",4],["tool",3]]]],[5,"find_vs_version","","Find the most recent installed version of Visual Studio",null,[[],[["vsvers",4],["string",3],["result",4]]]],[11,"new","cc","Construct a new instance of a blank set of configuration.",1,[[],["build",3]]],[11,"include","","Add a directory to the `-I` or include path for headers",1,[[["asref",8],["path",3]],["build",3]]],[11,"includes","","Add multiple directories to the `-I` include path.",1,[[],["build",3]]],[11,"define","","Specify a `-D` variable with an optional value.",1,[[["option",4],["into",8]],["build",3]]],[11,"object","","Add an arbitrary object file to link in",1,[[["asref",8],["path",3]],["build",3]]],[11,"flag","","Add an arbitrary flag to the invocation of the compiler",1,[[],["build",3]]],[11,"ar_flag","","Add an arbitrary flag to the invocation of the compiler",1,[[],["build",3]]],[11,"is_flag_supported","","Run the compiler to test if it accepts the given flag.",1,[[],[["error",3],["result",4]]]],[11,"flag_if_supported","","Add an arbitrary flag to the invocation of the compiler if…",1,[[],["build",3]]],[11,"shared_flag","","Set the `-shared` flag.",1,[[],["build",3]]],[11,"static_flag","","Set the `-static` flag.",1,[[],["build",3]]],[11,"no_default_flags","","Disables the generation of default compiler flags. The…",1,[[],["build",3]]],[11,"file","","Add a file which will be compiled",1,[[["asref",8],["path",3]],["build",3]]],[11,"files","","Add files which will be compiled",1,[[],["build",3]]],[11,"cpp","","Set C++ support.",1,[[],["build",3]]],[11,"cuda","","Set CUDA C++ support.",1,[[],["build",3]]],[11,"warnings_into_errors","","Set warnings into errors flag.",1,[[],["build",3]]],[11,"warnings","","Set warnings flags.",1,[[],["build",3]]],[11,"extra_warnings","","Set extra warnings flags.",1,[[],["build",3]]],[11,"cpp_link_stdlib","","Set the standard library to link against when compiling…",1,[[["option",4],["into",8]],["build",3]]],[11,"cpp_set_stdlib","","Force the C++ compiler to use the specified standard…",1,[[["option",4],["into",8]],["build",3]]],[11,"target","","Configures the target this configuration will be compiling…",1,[[],["build",3]]],[11,"host","","Configures the host assumed by this configuration.",1,[[],["build",3]]],[11,"opt_level","","Configures the optimization level of the generated object…",1,[[],["build",3]]],[11,"opt_level_str","","Configures the optimization level of the generated object…",1,[[],["build",3]]],[11,"debug","","Configures whether the compiler will emit debug…",1,[[],["build",3]]],[11,"force_frame_pointer","","Configures whether the compiler will emit instructions to…",1,[[],["build",3]]],[11,"out_dir","","Configures the output directory where all object files and…",1,[[["asref",8],["path",3]],["build",3]]],[11,"compiler","","Configures the compiler to be used to produce output.",1,[[["asref",8],["path",3]],["build",3]]],[11,"archiver","","Configures the tool used to assemble archives.",1,[[["asref",8],["path",3]],["build",3]]],[11,"cargo_metadata","","Define whether metadata should be emitted for cargo…",1,[[],["build",3]]],[11,"pic","","Configures whether the compiler will emit position…",1,[[],["build",3]]],[11,"use_plt","","Configures whether the Procedure Linkage Table is used for…",1,[[],["build",3]]],[11,"static_crt","","Configures whether the /MT flag or the /MD flag will be…",1,[[],["build",3]]],[11,"try_compile","","Run the compiler, generating the file `output`",1,[[],[["result",4],["error",3]]]],[11,"compile","","Run the compiler, generating the file `output`",1,[[]]],[11,"try_expand","","This will return a result instead of panicing; see…",1,[[],[["error",3],["result",4],["vec",3]]]],[11,"expand","","Run the compiler, returning the macro-expanded version of…",1,[[],["vec",3]]],[11,"get_compiler","","Get the compiler that\'s in use for this configuration.",1,[[],["tool",3]]],[11,"try_get_compiler","","Get the compiler that\'s in use for this configuration.",1,[[],[["tool",3],["result",4],["error",3]]]],[11,"to_command","","Converts this compiler into a `Command` that\'s ready to be…",2,[[],["command",3]]],[11,"path","","Returns the path for this compiler.",2,[[],["path",3]]],[11,"args","","Returns the default set of arguments to the compiler…",2,[[]]],[11,"env","","Returns the set of environment variables needed for this…",2,[[]]],[11,"cc_env","","Returns the compiler command in format of CC environment…",2,[[],["osstring",3]]],[11,"cflags_env","","Returns the compiler flags in format of CFLAGS environment…",2,[[],["osstring",3]]],[11,"is_like_gnu","","Whether the tool is GNU Compiler Collection-like.",2,[[]]],[11,"is_like_clang","","Whether the tool is Clang-like.",2,[[]]],[11,"is_like_msvc","","Whether the tool is MSVC-like.",2,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"to_string","","",3,[[],["string",3]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","cc::windows_registry","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","cc","",3,[[["error",3]],["error",3]]],[11,"clone","cc::windows_registry","",0,[[],["vsvers",4]]],[11,"clone","cc","",1,[[],["build",3]]],[11,"clone","","",3,[[],["error",3]]],[11,"clone","","",2,[[],["tool",3]]],[11,"default","","",1,[[],["build",3]]],[11,"eq","cc::windows_registry","",0,[[["vsvers",4]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","cc","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]]],"p":[[4,"VsVers"],[3,"Build"],[3,"Tool"],[3,"Error"]]},\
"embed_resource":{"doc":"A `Cargo` build script library to handle compilation and…","i":[[5,"compile","embed_resource","Compile the Windows resource file and update the cargo…",null,[[["asref",8],["path",3]]]],[5,"find_windows_sdk_tool","","Find MSVC build tools other than the compiler and linker",null,[[["asref",8]],[["option",4],["pathbuf",3]]]]],"p":[]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);