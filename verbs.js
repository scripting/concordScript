var number = {
	random: function (lower, upper) {
		return (random (lower, upper));
		}
	}
var op = {
	attributes: {
		getAll: function () {
			return ($(opGetActiveOutliner ()).concord ().op.attributes.getAll ());
			},
		getOne: function (name) {
			return $(opGetActiveOutliner ()).concord ().op.attributes.getOne (name);
			},
		setOne: function (name, value) {
			return $(opGetActiveOutliner ()).concord ().op.attributes.setOne (name, value);
			},
		addGroup: function (atts) {
			return $(opGetActiveOutliner ()).concord ().op.attributes.setGroup (atts);
			},
		deleteOne: function (name) {
			var atts = op.attributes.getAll (), flDeletedOne = false;
			if (atts [name] !== undefined) {
				delete atts [name];
				flDeletedOne = true;
				}
			op.attributes.addGroup (atts);
			return (flDeletedOne);
			},
		makeEmpty: function () {
			return (opAttsMakeEmpty ());
			},
		exists: function (attname) {
			return $(opGetActiveOutliner ()).concord ().op.attributes.exists (attname);
			}
		},
	bold: function () {
		return ($(opGetActiveOutliner ()).concord ().op.bold ());
		},
	collapse: function () {
		return ($(opGetActiveOutliner ()).concord ().op.collapse ());
		},
	collapseEverything: function () {
		return ($(opGetActiveOutliner ()).concord ().op.fullCollapse ());
		},
	countSubs: function () {
		return ($(opGetActiveOutliner ()).concord().op.countSubs ());
		},
	deleteSubs: function () {
		return ($(opGetActiveOutliner ()).concord ().op.deleteSubs ());
		},
	demote: function () {
		return ($(opGetActiveOutliner ()).concord ().op.demote ());
		},
	expand: function () {
		return ($(opGetActiveOutliner ()).concord ().op.expand ());
		},
	expandAllLevels: function () {
		return ($(opGetActiveOutliner ()).concord ().op.expandAllLevels ());
		},
	expandEverything: function () {
		return ($(opGetActiveOutliner ()).concord ().op.fullExpand ());
		},
	expandTo: function (headline) {
		expandToCursor (headline);
		return (setCursorActive (headline.getCursor ()));
		},
	firstSummit: function () {
		opFirstSummit ();
		return (true);
		},
	getCursor: function () {
		return (opGetCursor ());
		},
	getCursorJstruct: function () { //11/13/21 by DW
		return (opSubOutlineJstruct (opGetBarCursor ()));
		},
	getCursorOpml: function (flSubsOnly=false) {
		if (flSubsOnly) {
			return (opGetCursorOpmlSubsOnly ());
			}
		else {
			return (opCursorToXml ());
			}
		},
	getOutlineJstruct: function () { //11/16/21 by DW
		return (opWholeOutlineJstruct ());
		},
	getLineText: function () {
		return ($(opGetActiveOutliner ()).concord ().op.getLineText ());
		},
	getModified: function () {
		return ($(opGetActiveOutliner ()).concord ().op.changed ());
		},
	getRenderMode: function () { //7/28/13 by DW
		return ($(opGetActiveOutliner ()).concord ().op.getRenderMode ());
		},
	getSelectedText: function () {
		return (opGetSelectedText ());
		},
	go: function (dir, ct) {
		if (dir == right) {
			op.expand ();
			}
		return ($(opGetActiveOutliner ()).concord ().op.go (dir, ct));
		},
	hasSubs: function () {
		return (op.countSubs () > 0);
		},
	insert: function (s, direction) {
		if (s === undefined) { //4/9/21 by DW
			s = "undefined"
			}
		$(opGetActiveOutliner ()).concord ().op.insert (s, direction);
		return (true);
		},
	insertArray: function (theArray, title) { //4/9/21 by DW
		var dir = right;
		op.insert (title.toString (), down);
		theArray.forEach (function (item) {
			op.insert (item, dir);
			dir = down;
			});
		if (dir == down) {
			op.go (left, 1);
			}
		},
	insertInCalendar: function (s, atts) { //9/20/21 by DW
		return (opInsertInCalendar (s, atts));
		},
	insertOpml: function (opmltext, dir) {
		if (dir == undefined) {
			dir = down;
			}
		return ($(opGetActiveOutliner ()).concord ().op.insertXml (opmltext, dir));
		},
	isComment: function () {
		var isComment = op.attributes.getOne ("isComment")
		if ((isComment == undefined) || (isComment == "false")) {
			return (false);
			}
		else {
			return (true);
			}
		},
	italic: function () {
		return ($(opGetActiveOutliner ()).concord ().op.italic ());
		},
	link: function (url) {
		return ($(opGetActiveOutliner ()).concord ().op.link (url));
		},
	makeComment: function () {
		op.attributes.setOne ("isComment", "true");
		return ($(opGetActiveOutliner ()).concord ().script.makeComment ());
		},
	promote: function () {
		return ($(opGetActiveOutliner ()).concord ().op.promote ());
		},
	reorg: function (dir, ct) {
		if (ct == undefined) {
			ct = 1;
			}
		return ($(opGetActiveOutliner ()).concord ().op.reorg (dir, ct));
		},
	replaceSelectedText: function (replaceWith) {
		return (opReplaceSelectedText (replaceWith));
		},
	runSelection: function () {
		var value = eval (op.getLineText ());
		op.deleteSubs ();
		op.insert (value, right);
		op.go (left, 1);
		},
	setCursor: function (theCursor) {
		return (opSetCursor (theCursor));
		},
	setLineText: function (s) { //8/7/13 by DW
		return ($(opGetActiveOutliner ()).concord ().op.setLineText (s));
		},
	setModified: function () {
		return ($(opGetActiveOutliner ()).concord ().op.markChanged ());
		},
	setRenderMode: function (flrendermode) { //7/28/13 by DW
		$(opGetActiveOutliner ()).concord ().op.setRenderMode (flrendermode);
		},
	setTextMode: function (flTextMode) {
		return (opSetTextMode (flTextMode));
		},
	setTextMode: function (fltextmode) {
		$(opGetActiveOutliner ()).concord ().op.setTextMode (fltextmode);
		},
	strikethrough: function () {
		return ($(opGetActiveOutliner ()).concord ().op.strikethrough ());
		},
	toggleComment: function () {
		if (op.isComment ()) {
			op.unComment ();
			}
		else {
			op.makeComment ();
			}
		},
	toggleRenderMode: function () { //7/28/13 by DW
		op.setRenderMode (!op.getRenderMode ());
		},
	unComment: function () {
		op.attributes.deleteOne ("isComment");
		return ($(opGetActiveOutliner ()).concord ().script.unComment ());
		},
	visitAll: function (callback) {
		return (opVisitAll (callback));
		},
	visitSubs: function (lineCallback, indentCallback, outdentCallback) {
		var barcursor = opGetBarCursor ();
		opVisitSubs (barcursor, lineCallback);
		},
	visitToSummit: function (callback) {
		return ($(opGetActiveOutliner ()).concord ().op.visitToSummit (callback));
		},
	}
var drummer = {
	runScript: function (scripttext) {
		return new Promise (function (resolve, reject) {
			runScriptText (scripttext, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (data); 
					}
				});
			});
		},
	subscribeToOutline: function (url) {
		return new Promise (function (resolve, reject) {
			subscribeToInstantOutline (url, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (data); 
					}
				});
			});
		},
	version: function () {
		return (myVersion);
		},
	productname: function () {
		return (appConsts.productname);
		},
	productnameForDisplay: function () {
		return (appConsts.productnameForDisplay);
		},
	useStylesheet: function (url) { //8/8/21 by DW
		useStylesheet (url);
		return (true);
		}
	}
var tab = {
	openFile: function (fname, title) {
		return new Promise (function (resolve, reject) {
			openOutlineInTab (fname, title, undefined, function (err) {
				if (err) {
					reject (err);
					}
				else {
					resolve (true); 
					}
				});
			});
		},
	openInstantOutline: function (url, title) {
		return new Promise (function (resolve, reject) {
			subscribeToInstantOutline (url, function (err) {
				if (err) {
					reject (err);
					}
				else {
					resolve (true); 
					}
				});
			});
		},
	getPublicUrl: function () {
		var theTab = appPrefs.myTabs [appPrefs.ixCurrentTab];
		return (theTab.urlPublic);
		},
	getActiveTabStatus: function () {
		return (getActiveTabStatus ());
		}
	};
var twitter = { //3/20/21 by DW
	getUserInfo: function (screenname) {
		return new Promise (function (resolve, reject) {
			servercall ("getuserinfoforverb", {screenname}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("data == " + jsonStringify (data));
					resolve (data); 
					}
				});
			});
		},
	getRawUserInfo: function (screenname) { //9/9/21 by DW
		return new Promise (function (resolve, reject) {
			servercall ("getuserinfo", {screenname}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("data == " + jsonStringify (data));
					resolve (data); 
					}
				});
			});
		},
	getScreenname: function (id) {
		return new Promise (function (resolve, reject) {
			servercall ("getuserinfofromuserid", {id}, true, function (err, data) {
				if (err) {
					console.log ("err.message == " + err.message);
					resolve (undefined);
					}
				else {
					resolve (data.screen_name); 
					}
				});
			});
		},
	getMyScreenname: function () { //8/11/21 by DW
		return (twGetScreenName ());
		},
	getTweet: function (id) {
		return new Promise (function (resolve, reject) {
			servercall ("gettweetforverb", {id}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("data == " + jsonStringify (data));
					resolve (data); 
					}
				});
			});
		},
	getRawTweet: function (id) { //8/25/22 by DW
		return new Promise (function (resolve, reject) {
			servercall ("gettweet", {id}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("data == " + jsonStringify (data));
					resolve (data); 
					}
				});
			});
		},
	getThread: function (id) {
		return new Promise (function (resolve, reject) {
			var params = {
				id,
				reload: false
				};
			servercall ("getthread", params, true, function (err, theThread) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("data == " + jsonStringify (theThread));
					resolve (theThread); 
					}
				});
			});
		},
	newPost: function (theText, idInReplyTo) {
		return new Promise (function (resolve, reject) {
			if (idInReplyTo === undefined) {
				idInReplyTo = 0;
				}
			var params = {
				status: theText,
				in_reply_to_status_id: idInReplyTo
				};
			servercall ("sendtweetforverb", params, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("data == " + jsonStringify (data));
					resolve (data); 
					}
				});
			});
		},
	getHomeTimeline: function () {
		return new Promise (function (resolve, reject) {
			var params = {
				whichtimeline: "home",
				count: 200,
				exclude_replies: false,
				include_entities: false,
				user_id: undefined
				};
			servercall ("gettimeline", params, true, function (err, theTimeline) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("theTimeline == " + jsonStringify (theTimeline));
					resolve (theTimeline); 
					}
				});
			});
		},
	getMentionsTimeline: function () {
		return new Promise (function (resolve, reject) {
			var params = {
				whichtimeline: "mentions",
				count: 200,
				exclude_replies: false,
				include_entities: false,
				user_id: undefined
				};
			servercall ("gettimeline", params, true, function (err, theTimeline) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("theTimeline == " + jsonStringify (theTimeline));
					resolve (theTimeline); 
					}
				});
			});
		},
	getUserTimeline: function (screenname, includeReplies, idSince) {
		return new Promise (function (resolve, reject) {
			if (includeReplies === undefined) {
				includeReplies = false;
				}
			var params = {
				whichtimeline: "user",
				screen_name: screenname,
				count: 200,
				trim_user: true,
				exclude_replies: !includeReplies,
				include_entities: false,
				user_id: undefined,
				since_id: idSince
				};
			servercall ("gettimeline", params, true, function (err, theTimeline) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("theTimeline == " + jsonStringify (theTimeline));
					resolve (theTimeline); 
					}
				});
			});
		},
	getFollowers: function (screenname) {
		return new Promise (function (resolve, reject) {
			var params = {
				screen_name: screenname
				};
			servercall ("getfollowers", params, true, function (err, theFollowers) {
				if (err) {
					reject (err);
					}
				else {
					resolve (theFollowers); 
					}
				});
			});
		},
	getFollowed: function (screenname) {
		return new Promise (function (resolve, reject) {
			var params = {
				screen_name: screenname
				};
			servercall ("getfollowed", params, true, function (err, theFollowed) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("theFollowed == " + jsonStringify (theFollowed));
					resolve (theFollowed); 
					}
				});
			});
		},
	
	getFollowed: function (screenname) {
		return new Promise (function (resolve, reject) {
			var params = {
				screen_name: screenname
				};
			servercall ("getfollowed", params, true, function (err, theFollowed) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("theFollowed == " + jsonStringify (theFollowed));
					resolve (theFollowed); 
					}
				});
			});
		},
	
	getUserLists: function (screenname) { //5/7/21 by DW
		return new Promise (function (resolve, reject) {
			servercall ("getuserlists", {screenname}, true, function (err, theLists) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("theLists == " + jsonStringify (theLists));
					resolve (theLists); 
					}
				});
			});
		},
	getListMembers: function (idList) { //5/7/21 by DW
		return new Promise (function (resolve, reject) {
			servercall ("getlistmembers", {id: idList}, true, function (err, theMembers) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("theMembers == " + jsonStringify (theMembers));
					resolve (theMembers); 
					}
				});
			});
		},
	getListInfo: function (idList) { //5/7/21 by DW
		return new Promise (function (resolve, reject) {
			servercall ("getlistinfo", {id: idList}, true, function (err, theInfo) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("theInfo == " + jsonStringify (theInfo));
					resolve (theInfo); 
					}
				});
			});
		},
	updateListInfo: function (idList, theInfo) { //5/7/21 by DW
		return new Promise (function (resolve, reject) {
			var params = {
				id: idList,
				info: jsonStringify (theInfo)
				};
			servercall ("updatelistinfo", params, true, function (err, theInfo) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("theInfo == " + jsonStringify (theInfo));
					resolve (theInfo); 
					}
				});
			});
		},
	addMemberToList: function (idList, screenname) { //5/7/21 by DW
		return new Promise (function (resolve, reject) {
			servercall ("addmembertolist", {id: idList, screenname}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (data); 
					}
				});
			});
		},
	addGroupToList: function (idList, listOfScreennames) { //5/7/21 by DW
		return new Promise (function (resolve, reject) {
			var params = {
				id: idList,
				listofscreennames: listOfScreennames //a comma-separated list of names
				}
			servercall ("addgrouptolist", params, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (data); 
					}
				});
			});
		},
	removeUserFromList: function (idList, screenname) { //5/7/21 by DW
		return new Promise (function (resolve, reject) {
			var params = {
				id: idList,
				screenname
				}
			servercall ("removeuserfromlist", params, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (data); 
					}
				});
			});
		},
	removeGroupFromList: function (idList, listOfScreennames) { //5/7/21 by DW
		return new Promise (function (resolve, reject) {
			var params = {
				id: idList,
				listofscreennames: listOfScreennames //a comma-separated list of names
				}
			servercall ("removegroupfromlist", params, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (data); 
					}
				});
			});
		},
	
	}
var file = {
	exists: function (path) { 
		return new Promise (function (resolve, reject) {
			servercall ("fileexists", {relpath: path}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("file.exists: data == " + jsonStringify (data));
					resolve (getBoolean (data.flExists)); 
					}
				});
			});
		},
	readWholeFile: function (path) { 
		return new Promise (function (resolve, reject) {
			servercall ("readwholefile", {relpath: path}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (data.filetext); 
					}
				});
			});
		},
	writeWholeFile: function (path, filetext) { 
		return new Promise (function (resolve, reject) {
			serverpost ("writewholefile", {relpath: path}, true, filetext, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (filetext); 
					}
				});
			});
		},
	getFileInfo: function (relpath) { 
		return new Promise (function (resolve, reject) {
			servercall ("getfileinfo", {relpath}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					var fileInfo = {
						size: data.size,
						whenAccessed: new Date (data.whenAccessed),
						whenCreated: new Date (data.whenCreated),
						whenModified: new Date (data.whenModified),
						flPrivate: data.flPrivate,
						urlPublic: data.urlPublic //8/24/21 by DW
						};
					resolve (fileInfo); 
					}
				});
			});
		},
	makeFilePublic: function (path) { 
		return new Promise (function (resolve, reject) {
			servercall ("makefilepublic", {relpath: path}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (data.url);
					}
				});
			});
		},
	delete: function (path) { 
		return new Promise (function (resolve, reject) {
			servercall ("deletefile", {relpath: path}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (undefined); 
					}
				});
			});
		},
	getFileHierarchy: function () {
		return new Promise (function (resolve, reject) {
			servercall ("getfilehierarchy", undefined, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					console.log (jsonStringify (data));
					resolve (data);
					}
				});
			});
		},
	viewCurrentFileInReader: async function () { //7/28/13 by DW
		var theUrl = await file.makeFileViewable ();
		if (theUrl === undefined) {
			dialog.alert ("Can't open the file in the reader, possibly because it's not public.");
			}
		else {
			webBrowser.openUrl (theUrl);
			}
		},
	makeFileViewable: function () { //1/15/17 by DW
		return new Promise(function (resolve) {
			makeFileViewable (resolve);
			});
		},
	getDatePath: function (theDate, flLastSeparator) {
		return (getDatePath (theDate, flLastSeparator));
		},
	getFileList: function () { //1/16/17 by DW
		return new Promise(function (resolve) {
			twGetUserFiles (true, function (privateFiles) {
				twGetUserFiles (false, function (publicFiles) {
					function addFiles (whichFiles) {
						for (var i = 0; i < whichFiles.length; i++) {
							var theFile = whichFiles [i];
							theFiles [theFiles.length] = theFile.path;
							}
						}
					var theFiles = new Array ();
					addFiles (publicFiles);
					addFiles (privateFiles);
					resolve (theFiles);
					});
				});
			});
		},
	getDatePath: getDatePath
	}
var dns = {
	getDomainName: function (dottedid) {
		return new Promise (function (resolve, reject) {
			servercall ("getdomainname", {dottedid}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (data.name); 
					}
				});
			});
		},
	getDottedId: function (name) {
		return new Promise (function (resolve, reject) {
			servercall ("getdottedid", {name}, true, function (err, data) {
				if (err) {
					console.log (err.message);
					reject (err);
					}
				else {
					resolve (data.dottedid); 
					}
				});
			});
		}
	}
var string = {
	addPeriodAtEnd: addPeriodAtEnd,
	maxStringLength: maxStringLength,
	bumpUrlString: bumpUrlString,
	addCommas: stringAddCommas,
	decodeXml: decodeXml,
	randomSnarkySlogan: getRandomSnarkySlogan,
	formatDate: formatDate,
	beginsWith: beginsWith,
	contains: stringContains,
	countFields: stringCountFields,
	dayOfWeekToString: dayOfWeekToString,
	delete: stringDelete,
	encodeHtml: function (s) {
		return s.replace(/[\u00A0-\u9999<>\&]/g, function(i) {
			return '&#'+i.charCodeAt(0)+';';
			});
		},
	endsWith: endsWith,
	filledString: filledString,
	getRandomPassword: getRandomPassword,
	hashMD5: function (s) {
		return (SparkMD5.hash (s));
		},
	innerCaseName: innerCaseName,
	insert: stringInsert,
	isAlpha: isAlpha,
	isNumeric: isNumeric,
	isWhitespace: isWhitespace,
	isPunctuation: isPunctuation,
	lastField: stringLastField,
	lower: stringLower,
	upper: stringUpper,
	mid: stringMid,
	monthToString: monthToString, //January, February etc.
	nthField: stringNthField,
	padWithZeros: padWithZeros,
	popLastField: stringPopLastField,
	popTrailing: function (s, ch) { //11/25/13 by DW
		while (s.length > 0) {
			if (s [s.length - 1] != ch) {
				break;
				}
			s = string.delete (s, s.length, 1);
			}
		return (s);
		},
	popExtension: stringPopExtension, //1/18/17 by DW
	replaceAll: replaceAll,
	multipleReplaceAll: multipleReplaceAll, //1/18/17 by DW
	stripMarkup: stripMarkup,
	trimLeading: function (s, ch) {
		if (ch == undefined) {
			ch = " ";
			}
		return (trimLeading (s, ch));
		},
	trimTrailing: function (s, ch) {
		if (ch == undefined) {
			ch = " ";
			}
		return (trimTrailing (s, ch));
		},
	trimWhitespace: function (s, ch) { //8/24/13 by DWextensionToMimeType
		if (ch == undefined) {
			ch = " ";
			}
		return (trimLeading (trimTrailing (s, ch), ch))
		},
	extensionToMimeType: function (filepath) { //8/4/21 by DW
		const ext = stringLastField (filepath, "."); 
		if (ext == filepath) { //no extension
			return (undefined);
			}
		else {
			return (httpExt2MIME (ext));
			}
		},
	markdownProcess: function (s) { //11/2/21 by DW
		var md = new Markdown.Converter ();
		return (md.makeHtml (s));
		}
	}
var dialog = {
	alert: function (s) { //7/29/21 by DW
		return new Promise (function (resolve, reject) {
			alertDialog (s, function () {
				resolve (true);
				})
			});
		},
	ask: function (prompt, defaultValue, placeholder) {
		return new Promise(function (resolve) {
			return (askDialog (prompt, defaultValue, placeholder, function (value, flCancel) {
				if (flCancel) {
					resolve();
						}
					else {
						resolve(value);
						}
				}));
			});
		},
	confirm: function (prompt) {
		return new Promise (function (resolve) {
			confirmDialogForScripting (prompt, resolve);
			});
		},
	about: function (opmltext, title) {
		if (title === undefined) {
			title = "About Dialog";
			}
		outlineDialog (title, opmltext, true, undefined, undefined);
		}
	}
var date = {
	sameDay: sameDay,
	sameMonth: sameMonth,
	dayGreaterThanOrEqual: dayGreaterThanOrEqual,
	secondsSince: secondsSince,
	yesterday: dateYesterday,
	tomorrow: dateTomorrow,
	netStandardString: function (theDate) { //12/17/13 by DW
		return (new Date (theDate).toUTCString ());
		},
	convertToTimeZone: function (when, timeZoneString="0") { //11/15/21 by DW
		function processTimeZoneString (s) { //convert someting like 5:30 to 5.5
			var splits = s.split (":");
			if (splits.length == 2) {
				var ctsecs = Number (splits [1]);
				var hourFraction = ctsecs / 60;
				if (s [0] == "-") {
					hourFraction = -hourFraction;
					}
				s = Number (splits [0]) + hourFraction;
				}
			return (s);
			}
		var offset = Number (processTimeZoneString (timeZoneString));
		var d = new Date (when);
		var localTime = d.getTime ();
		var localOffset = d.getTimezoneOffset () *  60000;
		var utc = localTime + localOffset;
		var blogTime = utc + (3600000 * offset);
		return (new Date (blogTime));
		}
	}
var clock = {
	now: function () {
		return (new Date ());
		},
	waitSeconds: function (ctsecs) {
		return new Promise (function (resolve, reject) {
			var whenstart = new Date ();
			function doneWaiting () {
				resolve (date.secondsSince (whenstart));
				}
			setTimeout (doneWaiting, ctsecs * 1000)
			});
		}
	}
var speaker = {
	beep: function () {
		speakerBeep ();
		}
	}
var webBrowser = { 
	openUrl: function (url) {
		drummerOpenUrl (url); //10/6/21 by DW
		return (true);
		}
	}
var feedLand = { //9/12/22 by DW
	config: {
		urlServer: "http://api.feedland.org/"
		},
	getUserPrefs: function (screenname, urlServer=feedLand.config.urlServer) {
		return new Promise (function (resolve, reject) {
			servercall ("getuserprefs", {screenname}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (data); 
					}
				}, urlServer);
			});
		},
	setUserPrefs: function (thePrefs, urlServer=feedLand.config.urlServer) {
		return new Promise (function (resolve, reject) {
			var jsontext = jsonStringify (thePrefs);
			servercall ("sendprefs", {prefs: jsontext}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (data); 
					}
				}, urlServer);
			});
		
		},
	checkFeedNow: function (feedUrl, urlServer=feedLand.config.urlServer) {
		return new Promise (function (resolve, reject) {
			servercall ("checkfeednow", {url: feedUrl}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (data); 
					}
				}, urlServer);
			});
		},
	
	getUserCategories: function (screenname, urlServer=feedLand.config.urlServer) {
		return new Promise (function (resolve, reject) {
			servercall ("getuserprefs", {screenname}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					var theCategories = {
						screenname,
						categories: data.categories,
						homePageCategories: data.homePageCategories,
						newsproductCategories: data.newsproductCategoryList
						};
					resolve (theCategories); 
					}
				}, urlServer);
			});
		},
	getOneUserCategory: function (screenname, catname, urlServer=feedLand.config.urlServer) {
		return new Promise (function (resolve, reject) {
			servercall ("getfeedsincategory", {screenname, catname}, true, function (err, data) {
				if (err) {
					console.log (err.message);
					reject (err);
					}
				else {
					resolve (data); 
					}
				}, urlServer);
			});
		},
	
	getFollowers: function (feedUrl, urlServer=feedLand.config.urlServer) {
		return new Promise (function (resolve, reject) {
			servercall ("getfollowers", {url: feedUrl}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					console.log ("data == " + jsonStringify (data));
					resolve (data); 
					}
				}, urlServer);
			});
		},
	getSubscription: function (feedUrl, urlServer=feedLand.config.urlServer) {
		return new Promise (function (resolve, reject) {
			servercall ("isusersubscribed", {url: feedUrl}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					if (data.flSubscribed) {
						var sub = data.theSubscription;
						if (sub.categories !== undefined) { //9/6/22 by DW
							sub.categories = JSON.parse (sub.categories);
							}
						sub.screenname = sub.listName;
						delete sub.listName;
						resolve (sub);
						}
					else {
						resolve (undefined);
						}
					}
				}, urlServer);
			});
		},
	subscribe: function (feedUrl, urlServer=feedLand.config.urlServer) {
		return new Promise (function (resolve, reject) {
			servercall ("subscribe", {url: feedUrl}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (data); 
					}
				}, urlServer);
			});
		},
	unsubscribe: function (feedUrl, urlServer=feedLand.config.urlServer) {
		return new Promise (function (resolve, reject) {
			servercall ("unsubscribe", {url: feedUrl}, true, function (err, data) {
				if (err) {
					reject (err);
					}
				else {
					resolve (data); 
					}
				}, urlServer);
			});
		}
	}
var fargo = { //11/29/13 by DW
	version: function () {
		return (appConsts.version);
		},
	productname: function () {
		return (appConsts.productname);
		},
	productnameForDisplay: function () {
		return (appConsts.productnameForDisplay);
		}
	}
var oldSchool = {
	buildBlog: function (flFullData=false) {
		return new Promise (function (resolve, reject) {
			var url = "http://drummercms.scripting.com/build?blog=" + twGetScreenName ();
			httpRequest (url, undefined, undefined, function (err, jsontext) {
				if (err) {
					console.log ("There was an error building the blog: " + err.message);
					reject (err);
					}
				else {
					try {
						var jstruct = JSON.parse (jsontext);
						if (flFullData) {
							resolve (jstruct); 
							}
						else {
							resolve (jstruct.baseUrl); 
							}
						}
					catch (err) {
						console.log ("There was an error building the blog: " + err.message);
						reject (err);
						}
					}
				});
			});
		},
	getCursorLink: function () {
		var headers = opGetHeaders (), urlWebsite;
		if (headers.urlBlogWebsite !== undefined) {
			urlWebsite = headers.urlBlogWebsite;
			}
		else {
			return (undefined);
			}
		function pad (n) {
			return (padWithZeros (n, 2));
			}
		function getPostNode () {
			var barcursor = opGetBarCursor (), postNode = barcursor;
			barcursor.visitToSummit (function (theNode) {
				if (theNode.attributes.getOne ("type") == "calendarDay") {
					return (false);
					}
				postNode = theNode;
				return (true); //keep looking
				});
			return (postNode);
			}
		var whenCursor = new Date (opGetOneAtt ("created"));
		var postNode = getPostNode ();
		var whenPost = new Date (postNode.attributes.getOne ("created"));
		var timeZoneOffset = (headers.timeZoneOffset === undefined) ? "-5" : headers.timeZoneOffset;
		whenPost = date.convertToTimeZone (whenPost, timeZoneOffset);
		var url = urlWebsite + whenPost.getFullYear () + "/" + pad (whenPost.getMonth () + 1) + "/" + pad (whenPost.getDate ()) + ".html";
		url += "#a" + pad (whenCursor.getUTCHours ()) + pad (whenCursor.getUTCMinutes ()) + pad (whenCursor.getUTCSeconds ());
		return (url)
		}
	}

//opml verbs -- 9/5/21 by DW
	function readWholeOpmlFile (f, callback) {
		servercall ("readwholefile", {relpath: f}, true, function (err, data) {
			if (err) {
				callback (err);
				}
			else {
				try {
					var theOutline = opmlPackage ().parse (data.filetext);
					callback (undefined, theOutline);
					}
				catch (err) {
					callback (err);
					}
				}
			});
		}
	function writeWholeOpmlFile (f, theOutline, callback) {
		var opmltext = opmlPackage ().stringify (theOutline);
		serverpost ("writewholefile", {relpath: f}, true, opmltext, function (err) {
			if (err) {
				callback (err);
				}
			else {
				callback (undefined, true);
				}
			});
		}
	function opmlGetAttributes (f, callback) {
		var ixtab = findTabByFname (f);
		if (ixtab === undefined) { //the file is not open
			readWholeOpmlFile (f, function (err, theOutline) {
				if (err) {
					callback (err);
					}
				else {
					callback (err, theOutline.opml.head);
					}
				});
			}
		else {
			var id = "#outliner" + appPrefs.tabs [ixtab].serialnum
			callback (undefined, $(id).concord ().op.getHeaders ())
			}
		}
	function opmlSetAttributes (f, atts, callback) {
		var ixtab = findTabByFname (f);
		if (ixtab === undefined) { //the file is not open
			readWholeOpmlFile (f, function (err, theOutline) {
				if (err) {
					callback (err);
					}
				else {
					theOutline.opml.head = atts;
					writeWholeOpmlFile (f, theOutline, callback)
					}
				});
			}
		else {
			var id = "#outliner" + appPrefs.tabs [ixtab].serialnum
			$(id).concord ().op.setHeaders (atts);
			callback (undefined, true);
			}
		}
	
	var opml = {
		attributes: {
			getAll: function (f) {
				return new Promise (function (resolve, reject) {
					opmlGetAttributes (f, function (err, atts) {
						if (err) {
							reject (err);
							}
						else {
							resolve (atts); 
							}
						});
					});
				},
			setAll: function (f, atts) {
				return new Promise (function (resolve, reject) {
					opmlSetAttributes (f, atts, function (err, data) {
						if (err) {
							reject (err);
							}
						else {
							resolve (atts); 
							}
						});
					});
				},
			getOne: function (f, name) {
				return new Promise (function (resolve, reject) {
					opmlGetAttributes (f, function (err, atts) {
						if (err) {
							reject (err);
							}
						else {
							resolve (atts [name]); 
							}
						});
					});
				},
			setOne: function (f, name, value) {
				return new Promise (function (resolve, reject) {
					opmlGetAttributes (f, function (err, atts) {
						if (err) {
							reject (err);
							}
						else {
							atts [name] = value;
							opmlSetAttributes (f, atts, function (err, data) {
								if (err) {
									reject (err);
									}
								else {
									resolve (atts); 
									}
								});
							}
						});
					});
				},
			deleteOne: function (f, name) {
				return new Promise (function (resolve, reject) {
					opmlGetAttributes (f, function (err, atts) {
						if (err) {
							reject (err);
							}
						else {
							if (atts [name] !== undefined) {
								delete atts [name];
								opmlSetAttributes (f, atts, function (err, data) {
									if (err) {
										reject (err);
										}
									else {
										resolve (atts); 
										}
									});
								}
							else {
								resolve (atts); 
								}
							}
						});
					});
				},
			makeEmpty: function (f) {
				return new Promise (function (resolve, reject) {
					var atts = new Object ();
					opmlSetAttributes (f, atts, function (err, data) {
						if (err) {
							reject (err);
							}
						else {
							resolve (atts); 
							}
						});
					});
				},
			addGroup: function (f, groupAtts) {
				return new Promise (function (resolve, reject) {
					opmlGetAttributes (f, function (err, atts) {
						if (err) {
							reject (err);
							}
						else {
							for (var x in groupAtts) {
								atts [x] = groupAtts [x];
								}
							opmlSetAttributes (f, atts, function (err, data) {
								if (err) {
									reject (err);
									}
								else {
									resolve (atts); 
									}
								});
							}
						});
					});
				},
			exists: function (f, name) {
				return new Promise (function (resolve, reject) {
					opmlGetAttributes (f, function (err, atts) {
						if (err) {
							reject (err);
							}
						else {
							resolve (atts [name] !== undefined); 
							}
						});
					});
				}
			},
		
		parse: function (opmltext) { //9/13/21 by DW
			var theOutline = opmlPackage ().parse (opmltext);
			return (theOutline);
			},
		stringify: function (theOutline) { //9/13/21 by DW
			var opmltext = opmlPackage ().stringify (theOutline);
			return (opmltext);
			},
		
		getHeaders: function () {
			return (opGetHeaders ());
			},
		setHeaders: function (headers) {
			return (opSetHeaders (headers));
			},
		
		getCurrentOpml: function () {
			return (getCurrentOpml ());
			},
		getCurrentObject: function () {
			var head = opml.getHeaders ();
			var opmltext = getCurrentOpml ();
			var xstruct = $($.parseXML (opmltext));
			var adrbody = getXstuctBody (xstruct);
			var body = outlineToJson (adrbody, "outline");
			return ({head, body});
			},
		
		getMarkdown: function (opmltext) { //11/28/21 by DW
			var theOutline = opmlPackage ().parse (opmltext);
			return (subsToMarkdown (theOutline.opml.body.subs [0]));
			}
		}
//base64 verbs -- 9/8/21 by DW
	const base64 = {
		encode: function (theString) {
			return (btoa (theString));
			},
		decode: function (theEncodedString) {
			return (atob (theEncodedString));
			}
		};
//http verbs -- 11/5/21 by DW
	var http = {
		readUrl: function (url, flUseProxyServer) {
			if (flUseProxyServer === undefined) {
				flUseProxyServer = true;
				}
			if (flUseProxyServer) {
				return new Promise (function (resolve, reject) {
					console.log ("Using proxy server.");
					servercall ("httpreadurl", {url}, true, function (err, data) {
						if (err) {
							reject (err);
							}
						else {
							resolve (data); 
							}
						});
					});
				}
			else {
				return new Promise (function (resolve, reject) {
					console.log ("Not using proxy server.");
					httpRequest (url, undefined, undefined, function (err, data) {
						if (err) {
							reject (err);
							}
						else {
							resolve (data); 
							}
						});
					});
				}
			},
		derefUrl: function (url) { //9/17/21 by DW
			return new Promise (function (resolve, reject) {
				servercall ("derefurl", {url}, true, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data.longurl); 
						}
					});
				});
			},
		client: function (options, flUseProxyServer=true) { //11/5/21 by DW
			var request = { //defaults
				type: "GET",
				url: undefined, //defaults to the current page
				data: undefined,
				params: undefined,
				headers: {
					"User-Agent": drummer.productname () + " v" + drummer.version ()
					}
				}
			if (options.headers !== undefined) { //11/7/21 by DW
				for (var x in options.headers) {
					request.headers [x] = options.headers [x];
					}
				}
			for (var x in options) {
				if (x != "headers") {
					request [x] = options [x];
					}
				}
			if (request.data !== undefined) {
				if (!$.isPlainObject (request.data) && (typeof (request.data) != "string")) { //8/2/21 by DW
					request.data = request.data.toString ();
					}
				}
			if (request.params !== undefined) {
				request.url += "?" + drummerBuildParamList (request.params);
				}
			if (flUseProxyServer) {
				return new Promise (function (resolve, reject) {
					var proxyRequest = {
						method: request.type,
						url: request.url,
						body: request.data,
						headers: request.headers
						};
					var jsontext = jsonStringify (proxyRequest);
					servercall ("httprequest", {request: jsontext}, true, function (err, data) {
						if (err) {
							reject (err);
							}
						else {
							resolve (data); 
							}
						});
					});
				}
			else {
				return new Promise (function (resolve, reject) {
					$.ajax (request)
						.success (function (data, status) { 
							resolve (data); 
							}) 
						.error (function (status) { 
							var err = JSON.parse (status.responseText);
							reject (err);
							});
					});
				}
			}
		}
//github verbs -- 11/8/21 by DW
	function gitHubUploader (commitMessage=".") { //11/26/21 by DW
		let whenstart = new Date ();
		let theOutline = opWholeOutlineJstruct ();
		
		function notComment (node) {
			return (!getBoolean (node.isComment));
			}
		function notBlank (node) {
			return (trimWhitespace (node.text) != "");
			}
		
		function subsToMarkdown (theFileNode) {
			let markdowntext = "", indentlevel = 0;
			function addlevel (theNode, flSinglespace=false) {
				var flAddExtraReturn = false;
				function add (s) {
					markdowntext += s + ((flSinglespace) ? "\n" : "\n\n");
					}
				if (theNode.flSinglespaceMarkdown !== undefined) {
					var newSingleVal = getBoolean (theNode.flSinglespaceMarkdown);
					if (newSingleVal && (!flSinglespace)) {
						flAddExtraReturn = true;
						}
					flSinglespace = newSingleVal;
					}
				if (theNode.subs !== undefined) {
					theNode.subs.forEach (function (sub) {
						add (sub.text);
						indentlevel++;
						addlevel (sub, flSinglespace);
						indentlevel--;
						});
					if (flAddExtraReturn) {
						markdowntext += "\n";
						}
					}
				}
			addlevel (theFileNode);
			return (markdowntext);
			}
		
		theOutline.opml.body.subs.forEach (function (theLocation) { //each top level head is a location
			if (notComment (theLocation) && notBlank (theLocation)) {
				let locationpath = theLocation.text;
				if (theLocation.subs !== undefined) {
					theLocation.subs.forEach (function (theFile) {
						if (notComment (theLocation) && notBlank (theLocation)) {
							let filepath = theFile.text;
							let filecontent = subsToMarkdown (theFile);
							let locationparts = locationpath.split (":");
							let service = locationparts [0]; //for now just github
							switch (service) {
								case "github":
									let username = locationparts [1];
									let repository = locationparts [2];
									let basepath = locationparts [3];
									let path = basepath + filepath;
									console.log ("github: path = " + path + ", repository == " + repository + ", filecontent.length == " + filecontent.length);
									var returnedobj = github.upload (username, repository, path, filecontent, commitMessage);
									break;
								}
							}
						});
					}
				}
			});
		
		console.log ("gitHubUploader: " + secondsSince (whenstart) + " secs.");
		}
	var github = {
		connectViaOauth: function () {
			drummerOpenUrl ("https://github.com/login/oauth/authorize?client_id=" + drummerGetIdGithubClient () + "&scope=repo&redirect_url=" + encodeURIComponent (window.location.href));
			return (true);
			},
		getAccessToken: function () {
			return (localStorage.githubAccessToken);
			},
		disconnect: function () {
			delete localStorage.githubAccessToken;
			return (true);
			},
		download: function (username, repository, path) {
			return new Promise (function (resolve, reject) {
				var params = {
					username, repository, path, accessToken: github.getAccessToken ()
					};
				servercall ("downloadfromgithub", params, true, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					});
				});
			},
		upload: function (username, repository, path, data, message) {
			var options = {
				username, repository, path, message, accessToken: github.getAccessToken ()
				};
			return new Promise (function (resolve, reject) {
				var params = {
					options: jsonStringify (options)
					};
				serverpost ("uploadtogithub", params, true, data, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					});
				});
			},
		getUserInfo: function (username) {
			return new Promise (function (resolve, reject) {
				var params = {
					username, accessToken: github.getAccessToken ()
					};
				servercall ("githubgetuserinfo", params, true, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					});
				});
			},
		getDirectory: function (username, repository, path) {
			return new Promise (function (resolve, reject) {
				if (path === undefined) { //you can leave out the path param
					path = "";
					}
				var params = {
					username, repository, path, accessToken: github.getAccessToken ()
					};
				servercall ("githubgetdirectory", params, true, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					});
				});
			},
		glorp: function (commitMessage=".") {
			gitHubUploader (commitMessage);
			}
		}
//rss verbs -- //11/19/21 by DW
	var rss = {
		readFeed: function (feedUrl) {
			return new Promise (function (resolve, reject) {
				var url = "http://feeder.scripting.com/returnjson?url=" + feedUrl;
				httpRequest (url, undefined, undefined, function (err, jsontext) {
					if (err) {
						reject (err);
						}
					else {
						try {
							var jstruct = JSON.parse (jsontext);
							resolve (jstruct); 
							}
						catch (err) {
							reject (err);
							}
						}
					});
				});
			}
		}
//daytona verbs -- 12/11/21 by DW
	var urlDaytonaServer = "http://daytona.scripting.com/";
	var daytona = {
		ping: function (urlOutline, collection) {
			return new Promise (function (resolve, reject) {
				servercall ("ping", {url: urlOutline, collection}, true, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					}, urlDaytonaServer);
				});
			},
		query: function (query, collection) {
			return new Promise (function (resolve, reject) {
				var endpoint;
				switch (collection) {
					case "drummerdocs": case "scriptingnews": 
						endpoint = "getindexforcollection";
						break;
					case "drummeruser":
						endpoint = "getindexforuser";
						break;
					}
				servercall (endpoint, {query, collection}, true, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						data.forEach (function (item) {
							console.log (item.jsontext.length);
							item.jstruct = JSON.parse (item.jsontext);
							delete item.jsontext;
							});
						resolve (data); 
						}
					}, urlDaytonaServer);
				});
			},
		removeOutlineRefs: function (urlOutline, collection) {
			return new Promise (function (resolve, reject) {
				servercall ("removeoutlinerefs", {url: urlOutline, collection}, true, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (true); 
						}
					}, urlDaytonaServer);
				});
			},
		resetMyIndex: function (collection) {
			return new Promise (function (resolve, reject) {
				servercall ("resetmyindex", {collection}, true, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (true); 
						}
					}, urlDaytonaServer);
				});
			}
		};
//opml package -- 7/26/21 by DW
	function opmlPackage () {
		const opml = {
	parse: opmlParse,
	stringify: opmlStringify,
	htmlify: getOutlineHtml,
	read: readOutline, //9/24/21 by DW
	visitAll: visitAll,
	markdownToOutline, //1/3/22 by DW
	outlineToMarkdown //1/3/22 by DW
	};

function filledString (ch, ct) { //6/4/14 by DW
	var s = "";
	for (var i = 0; i < ct; i++) {
		s += ch;
		}
	return (s);
	}
function encodeXml (s) { //7/15/14 by DW
	//Changes
		//12/14/15; 4:28:14 PM by DW
			//Check for undefined, return empty string.
	if (s === undefined) {
		return ("");
		}
	else {
		var charMap = {
			'<': '&lt;',
			'>': '&gt;',
			'&': '&amp;',
			'"': '&'+'quot;'
			};
		s = s.toString();
		s = s.replace(/\u00A0/g, " ");
		var escaped = s.replace(/[<>&"]/g, function(ch) {
			return charMap [ch];
			});
		return escaped;
		}
	}
function xmlCompile (xmltext) { //3/27/17 by DW
	return ($($.parseXML (xmltext)));
	}
function xmlGatherAttributes (adrx, theTable) {
	if (adrx.attributes != undefined) {
		for (var i = 0; i < adrx.attributes.length; i++) {
			var att = adrx.attributes [i];
			if (att.specified) {
				theTable [att.name] = att.value;
				}
			}
		}
	}
function xmlGetAttribute (adrx, name) {
	return ($(adrx).attr (name));
	}
function xmlGetAddress (adrx, name) {
	return (adrx.find (name));
	}
function xmlGetSubValues (adrx) { //10/12/16 by DW
	//Changes
		//10/12/16; 11:25:15 AM by DW
			//Return a JS object with the values of all the sub-elements of adrx.
	var values = new Object ();
	$(adrx).children ().each (function () {
		var name = xmlGetNodeNameProp (this);
		if (name.length > 0) {
			var val = $(this).prop ("textContent");
			//name = "opml" + string.upper (name [0]) + string.mid (name, 2, name.length - 1);
			values [name] = val;
			}
		});
	return (values);
	}
function xmlGetNodeNameProp (adrx) { //12/10/13 by DW
	return ($(adrx).prop ("nodeName"));
	}
function xmlHasSubs (adrx) {
	return ($(adrx).children ().length > 0); //use jQuery to get answer -- 12/30/13 by DW
	};

function outlineToJson (adrx, nameOutlineElement) { //12/25/20 by DW
	//Changes
		//10/20/14; 5:54:44 PM by DW
			//Convert a <source:outline> structure from an RSS item into a jstruct.
	var theOutline = new Object ();
	if (nameOutlineElement === undefined) {
		nameOutlineElement = "outline";
		}
	xmlGatherAttributes (adrx, theOutline);
	if (xmlHasSubs (adrx)) {
		theOutline.subs = [];
		$(adrx).children (nameOutlineElement).each (function () {
			theOutline.subs [theOutline.subs.length] = outlineToJson (this, nameOutlineElement);
			});
		}
	return (theOutline);
	}
function markdownToOutline (mdtext, options) {  //1/3/22 by DW
	//Changes
		//1/12/22; 5:17:25 PM by DW
			//New optional param, options. 
			//options.flAddUnderscores, defaults true. 
		//1/8/22; 10:54:14 AM by DW
			//Any atts that show up at the beginning of a file are ignored. Previously they would cause the process to crash.
		//1/3/22; 5:50:36 PM by DW
			//Turn a markdown file as created by LogSeq or a compatible product 
			//into an outline structure compatible with the one that is created from 
			//parsing OPML text.
	var theOutline = {
		opml: {
			head: {
				},
			body: {
				subs: new Array ()
				}
			}
		};
	
	if (options === undefined) { //1/12/22 by DW
		options = new Object ();
		}
	if (options.flAddUnderscores === undefined) {
		options.flAddUnderscores = true;
		}
	
	mdtext = mdtext.toString ();
	var lines = mdtext.split ("\n"), lastlevel = 0, lastnode = undefined, currentsubs = theOutline.opml.body.subs, stack = new Array ();
	lines.forEach (function (theLine) {
		var thislevel = 0, flInsert = true;
		while (theLine.length > 0) {
			if (theLine [0] != "\t") {
				break;
				}
			thislevel++;
			theLine = stringDelete (theLine, 1, 1);
			}
		if (beginsWith (theLine, "- ")) {
			theLine = stringDelete (theLine, 1, 2);
			}
		else { //is the line an attribute?
			if (stringContains (theLine, ":: ")) {
				let parts = theLine.split (":: ");
				if (lastnode !== undefined) { //1/8/22 by DW
					var name = (options.flAddUnderscores) ? "_" + parts [0] : parts [0]; //1/12/22 by DW
					lastnode [name] = parts [1];
					//lastnode ["_" + parts [0]] = parts [1];
					}
				flInsert = false;
				}
			}
		if (thislevel > lastlevel) {
			stack.push (currentsubs);
			lastnode.subs = new Array ();
			currentsubs = lastnode.subs;
			}
		else {
			if (thislevel < lastlevel) {
				var ctpops = lastlevel - thislevel;
				for (var i = 1; i <= ctpops; i++) {
					currentsubs = stack.pop ();
					}
				}
			}
		
		if (flInsert) {
			var newnode = {
				text: theLine
				}
			currentsubs.push (newnode);
			lastnode = newnode;
			lastlevel = thislevel;
			}
		});
	return (theOutline);
	}
function outlineToMarkdown (theOutline) {  //1/3/22 by DW
	//Changes
		//1/3/22; 6:03:00 PM by DW
			//Generate markdown text from the indicated outline structure 
			//that can be read by LogSeq and compatible apps. 
	var mdtext = "", indentlevel = 0;
	function add (s) {
		mdtext += filledString ("\t", indentlevel) + s + "\n";
		}
	function addAtts (atts) {
		for (var x in atts) {
			if ((x != "subs") && (x != "text")) {
				if (beginsWith (x, "_")) {
					add (stringDelete (x, 1, 1) + ":: " + atts [x]);
					}
				}
			}
		}
	function dolevel (theNode) {
		theNode.subs.forEach (function (sub) {
			add ("- " + sub.text);
			addAtts (sub);
			if (sub.subs !== undefined) {
				indentlevel++;
				dolevel (sub);
				indentlevel--;
				}
			});
		}
	//addAtts (theOutline.opml.head);
	dolevel (theOutline.opml.body)
	return (mdtext);
	}

function opmlParse (opmltext) {
	//Changes
		//12/16/21; 11:43:21 AM by DW
			//If opmltext is not valid XML, display a message in the console.
		//6/13/21; 9:49:51 AM by DW
			//Generate a JavaScript object from OPML text. 
	var xstruct;
	try {
		xstruct = xmlCompile (opmltext);
		}
	catch (err) {
		console.log ("opmlParse: invalid XML.");
		throw err;
		}
	
	var adrhead = xmlGetAddress (xstruct, "head");
	var adrbody = xmlGetAddress (xstruct, "body");
	var theObject = {
		opml: {
			head: xmlGetSubValues (adrhead),
			body: outlineToJson (adrbody)
			}
		}
	return (theObject);
	}
function opmlStringify (theOutline) { //returns the opmltext for the outline -- 8/6/17 by DW
	var opmltext = "", indentlevel = 0;
	function add (s) {
		opmltext += filledString ("\t", indentlevel) + s + "\n";
		}
	function addSubs (subs) {
		if (subs !== undefined) {
			for (var i = 0; i < subs.length; i++) {
				let sub = subs [i], atts = "";
				for (var x in sub) {
					if (x != "subs") {
						atts += " " + x + "=\"" + encodeXml (sub [x]) + "\"";
						}
					}
				if (sub.subs === undefined) {
					add ("<outline" + atts + " />");
					}
				else {
					add ("<outline" + atts + " >"); indentlevel++;
					addSubs (sub.subs);
					add ("</outline>"); indentlevel--;
					}
				}
			}
		}
	add ("<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>");
	add ("<opml version=\"2.0\">"); indentlevel++;
	//do head section
		add ("<head>"); indentlevel++;
		for (var x in theOutline.opml.head) {
			add ("<" + x + ">" + theOutline.opml.head [x] + "</" + x + ">");
			}
		add ("</head>"); indentlevel--;
	//do body section
		add ("<body>"); indentlevel++;
		addSubs (theOutline.opml.body.subs);
		add ("</body>"); indentlevel--;
	add ("</opml>"); indentlevel--;
	//console.log ("opmlify: opmltext == \n" + opmltext);
	return (opmltext);
	}
function getOutlineHtml (theOutline) {
	var htmltext = "", indentlevel = 0; //5/24/24 by DW
	function add (s) {
		htmltext += filledString ("\t", indentlevel) + s + "\n";
		}
	function addSubsHtml (node) {
		add ("<ul>"); indentlevel++;
		node.subs.forEach (function (sub) {
			add ("<li>" + sub.text + "</li>");
			if (sub.subs !== undefined) {
				addSubsHtml (sub);
				}
			});
		add ("</ul>"); indentlevel--;
		}
	addSubsHtml (theOutline.opml.body);
	return (htmltext);
	}
function visitAll (theOutline, callback) {
	function visitSubs (theNode) {
		if (theNode.subs !== undefined) {
			for (var i = 0; i < theNode.subs.length; i++) {
				var theSub = theNode.subs [i];
				if (!callback (theSub)) {
					return (false);
					}
				if (!visitSubs (theSub)) { //9/7/24 by DW -- see worknotes comment
					return (false);
					}
				}
			}
		return (true);
		}
	visitSubs (theOutline.opml.body);
	}

function readOutline (urlOpmlFile, options, callback) { //9/24/21 by DW
	//Changes
		//9/27/21; 1:57:08 PM by DW
			//If options is not defined, initialize it to a default object.
		//9/24/21; 1:51:52 PM by DW
			//Read the outline over HTTP. If options.flSubscribe is present and true, we set up a websockets connection if the outline supports it, and calll back when it updates.
	var mySocket = undefined, urlSocketServer;
	function beginsWith (s, possibleBeginning, flUnicase) { 
		if (s === undefined) { //7/15/15 by DW
			return (false);
			}
		if (s.length == 0) { //1/1/14 by DW
			return (false);
			}
		if (flUnicase === undefined) {
			flUnicase = true;
			}
		if (flUnicase) {
			for (var i = 0; i < possibleBeginning.length; i++) {
				if (stringLower (s [i]) != stringLower (possibleBeginning [i])) {
					return (false);
					}
				}
			}
		else {
			for (var i = 0; i < possibleBeginning.length; i++) {
				if (s [i] != possibleBeginning [i]) {
					return (false);
					}
				}
			}
		return (true);
		}
	function readHttpFile (url, timeoutInMilliseconds, headers, callback) { 
		if (timeoutInMilliseconds === undefined) { 
			timeoutInMilliseconds = 5000;
			}
		if (headers === undefined) {
			headers = new Object ();
			}
		var jxhr = $.ajax ({ 
			url: url,
			dataType: "text", 
			headers: headers,
			timeout: timeoutInMilliseconds 
			}) 
		.success (function (data, status) { 
			callback (undefined, data);
			}) 
		.error (function (status) { 
			callback (status);
			});
		}
	function wsWatchForChange () { //connect with socket server, if not already connected
		if (mySocket === undefined) {
			mySocket = new WebSocket (urlSocketServer); 
			mySocket.onopen = function (evt) {
				var msg = "watch " + urlOpmlFile;
				mySocket.send (msg);
				console.log ("wsWatchForChange: socket is open. sent msg == " + msg);
				};
			mySocket.onmessage = function (evt) {
				var s = evt.data;
				if (s !== undefined) { //no error
					const updatekey = "update\r";
					if (beginsWith (s, updatekey)) { //it's an update
						var opmltext = stringDelete (s, 1, updatekey.length);
						console.log ("wsWatchForChange: update received along with " + opmltext.length + " chars of OPML text.");
						callback (undefined, opmlParse (opmltext));
						}
					}
				};
			mySocket.onclose = function (evt) {
				mySocket = undefined;
				};
			mySocket.onerror = function (evt) {
				console.log ("wsWatchForChange: socket for outline " + urlOpmlFile + " received an error.");
				};
			}
		}
	 
	if (options === undefined) { //9/27/21 by DW
		options = {
			flSubscribe: false
			};
		}
	
	readHttpFile (urlOpmlFile, undefined, undefined, function (err, opmltext) {
		if (err) {
			callback (err);
			}
		else {
			if (options.flSubscribe) {
				var theOutline = opmlParse (opmltext);
				urlSocketServer = theOutline.opml.head.urlUpdateSocket;
				wsWatchForChange (); //connect with socket server
				self.setInterval (wsWatchForChange, 1000); //make sure we stay connected
				callback (undefined, theOutline);
				}
			else {
				callback (undefined, opmlParse (opmltext));
				}
			}
		});
	}

		return (opml);
		}

//wordpress verbs -- 9/11/23 by DW
	const wordpress = {
		getServerAddress: function () {
			return ("https://drummer.land/");
			},
		connectViaOauth: function () {
			const apiUrl = wordpress.getServerAddress () + "connect?urlapphomepage=" + encodeURIComponent (location.href);
			drummerOpenUrl (apiUrl);
			return (true);
			},
		getUserInfo: function () {
			console.log ("wordpress.getUserInfo");
			return new Promise (function (resolve, reject) {
				var params = {
					token: localStorage.wordpressAccessToken
					};
				servercall ("wordpressgetuserinfo", params, false, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					});
				});
			},
		getUserSites: function () {
			return new Promise (function (resolve, reject) {
				var params = {
					token: localStorage.wordpressAccessToken
					};
				servercall ("wordpressgetusersites", params, false, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					});
				});
			},
		getUserSubscriptions: function () {
			return new Promise (function (resolve, reject) {
				var params = {
					token: localStorage.wordpressAccessToken
					};
				servercall ("wordpressgetsubscriptions", params, false, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					});
				});
			},
		getSitePosts: function (idsite) {
			console.log ("wordpress.getSitePosts");
			return new Promise (function (resolve, reject) {
				var params = {
					token: localStorage.wordpressAccessToken,
					idsite
					};
				servercall ("wordpressgetsiteposts", params, false, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					});
				});
			},
		getSiteUsers: function (idsite) {
			console.log ("wordpress.getSiteUsers");
			return new Promise (function (resolve, reject) {
				var params = {
					token: localStorage.wordpressAccessToken,
					idsite
					};
				servercall ("wordpressgetsiteusers", params, false, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					});
				});
			},
		getSiteInfo: function (idsite) {
			console.log ("wordpress.getSiteInfo");
			return new Promise (function (resolve, reject) {
				var params = {
					token: localStorage.wordpressAccessToken,
					idsite
					};
				servercall ("wordpressgetsiteinfo", params, false, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					});
				});
			},
		getSiteMedialist: function (idsite) {
			console.log ("wordpress.getSiteMedialist");
			return new Promise (function (resolve, reject) {
				var params = {
					token: localStorage.wordpressAccessToken,
					idsite
					};
				servercall ("wordpressgetsitemedialist", params, false, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					});
				});
			},
		getPost: function (idsite, idpost) {
			console.log ("wordpress.getPost");
			return new Promise (function (resolve, reject) {
				var params = {
					token: localStorage.wordpressAccessToken,
					idsite,
					idpost
					};
				servercall ("wordpressgetpost", params, false, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					});
				});
			},
		addPost: function (idsite, thePost) {
			console.log ("wordpress.newPost");
			return new Promise (function (resolve, reject) {
				var params = {
					token: localStorage.wordpressAccessToken,
					idsite,
					jsontext: jsonStringify (thePost)
					};
				servercall ("wordpressaddpost", params, false, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					});
				});
			},
		updatePost: function (idsite, idpost, thePost) {
			console.log ("wordpress.updatePost");
			return new Promise (function (resolve, reject) {
				var params = {
					token: localStorage.wordpressAccessToken,
					idsite,
					idpost,
					jsontext: jsonStringify (thePost)
					};
				servercall ("wordpressupdatepost", params, false, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					});
				});
			},
		deletePost: function (idsite, idpost, thePost) {
			console.log ("wordpress.deletePost");
			return new Promise (function (resolve, reject) {
				var params = {
					token: localStorage.wordpressAccessToken,
					idsite,
					idpost
					};
				servercall ("wordpressdeletepost", params, false, function (err, data) {
					if (err) {
						reject (err);
						}
					else {
						resolve (data); 
						}
					});
				});
			}
		}



