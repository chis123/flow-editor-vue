export const AA = {
  'title': 'Process editor',
  'namespace': 'http://b3mn.org/stencilset/bpmn2.0#',
  'description': 'BPMN process editor',
  'propertyPackages': [
    {
    'name': 'outputpackage',
    'properties': [{
      'id': 'output',
      'type': 'Complex',
      'title': '输出',
      'value': '',
      'description': '活动输出内容',
      'popular': true,
      'refToView': 'text_output'
    }]
  }, {
    'name': 'inputpackage',
    'properties': [{
      'id': 'input',
      'type': 'Complex',
      'title': '输入',
      'value': '',
      'description': '活动输入内容',
      'popular': true,
      'refToView': 'text_input'
    }]
  }, {
    'name': 'departmentpackage',
    'properties': [{
      'id': 'department',
      'type': 'Complex',
      'title': '部门',
      'value': '',
      'description': '选择活动节点所在部门',
      'popular': true
    }]
  }, {
    'name': 'activerolepackage',
    'properties': [{
      'id': 'activerole',
      'type': 'Complex',
      'title': '角色',
      'value': '',
      'description': '选择活动节点所属角色',
      'popular': true,
      'refToView': 'text_role'
    }]
  }, {
    'name': 'activesystempackage',
    'properties': [{
      'id': 'activesystem',
      'type': 'select',
      'title': '系统',
      'value': '',
      'description': '选择活动节点落地系统',
      'popular': true,
      'refToView': 'text_system'
    }
    ]
  },
    {
      'name': 'numberepackage',
      'properties': [
        {
          'id': 'number',
          'type': 'String',
          'title': '编号',
          'value': '',
          'description': '活动编号',
          'popular': true,
          'refToView': 'text_number'
        }
      ]
    },
    {
      'name': 'important_levelpackage',
      'properties': [
        {
          'id': 'important_level',
          'type': 'select',
          'title': '重要度',
          'value': 'None',
          'description': '重要度',
          'popular': true,
          'refToView': 'important_sign'
          // "refToView": "compensation"
        }
      ]
    },
    {
      'name': 'attachmentpackage',
      'properties': [
        {
          'id': 'attachment',
          'type': 'Complex',
          'title': '附件',
          'value': '',
          'description': '附件',
          'popular': true,
          'refToView': 'attachment_sign'
        }
      ]
    },
    {
      'name': 'process_idpackage',
      'properties': [
        {
          'id': 'process_id',
          'type': 'String',
          'title': 'Process identifier',
          'value': 'process',
          'description': 'Unique identifier of the process definition.',
          'popular': true
        }
      ]
    },
    {
      'name': 'overrideidpackage',
      'properties': [
        {
          'id': 'overrideid',
          'type': 'String',
          'title': 'Id',
          'value': '',
          'description': 'Unique identifier of the element.',
          'popular': true
        }
      ]
    },
    {
      'name': 'ispropertyfortaskpackage',
      'properties': [
        {
          'id': 'ispropertyfortask',
          'type': 'Boolean',
          'title': '是否关联节点属性',
          'value': 'true',
          'description': '泳道属性是否关联节点属性?',
          'popular': true
        }
      ]
    },
    {
      'name': 'propertiesfortaskpackage',
      'properties': [
        {
          'id': 'propertiesfortask',
          'type': 'select',
          'title': '关联属性',
          'value': 'None',
          'description': '选择关联属性',
          'popular': true
        }
      ]
    },
    {
      'name': 'namepackage',
      'properties': [
        {
          'id': 'name',
          'type': 'String',
          'title': 'Name',
          'value': '',
          'description': 'The descriptive name of the BPMN element.',
          'popular': true,
          'refToView': 'text_name'
        }
      ]
    },
    {
      'name': 'documentationpackage',
      'properties': [
        {
          'id': 'documentation',
          'type': 'Text',
          'title': 'Documentation',
          'value': '',
          'description': 'The descriptive name of the BPMN element.',
          'popular': true
        }
      ]
    },
    {
      'name': 'categorypackage',
      'properties': [
        {
          'id': 'categorydefinition',
          'type': 'String',
          'title': 'Category',
          'value': '',
          'description': 'Category of the BPMN element.',
          'popular': true
        }
      ]
    },
    {
      'name': 'process_authorpackage',
      'properties': [
        {
          'id': 'process_author',
          'type': 'String',
          'title': 'Process author',
          'value': '',
          'description': 'Author of the process definition.',
          'popular': true
        }
      ]
    },
    {
      'name': 'process_versionpackage',
      'properties': [
        {
          'id': 'process_version',
          'type': 'String',
          'title': 'Process version string (documentation only)',
          'value': '',
          'description': 'Version identifier for documentation purpose.',
          'popular': true
        }
      ]
    },
    {
      'name': 'process_historylevelpackage',
      'properties': [
        {
          'id': 'process_historylevel',
          'type': 'flowable-processhistorylevel',
          'title': 'Set a specific history level for this process definition',
          'value': '',
          'description': 'Set a specific history level for this process definition',
          'popular': true
        }
      ]
    },
    {
      'name': 'isexecutablepackage',
      'properties': [
        {
          'id': 'isexecutable',
          'type': 'Boolean',
          'title': 'Is executable',
          'value': 'true',
          'description': 'Is the process executable?',
          'popular': true
        }
      ]
    },
    {
      'name': 'process_potentialstarteruserpackage',
      'properties': [
        {
          'id': 'process_potentialstarteruser',
          'type': 'String',
          'title': 'Potential starter user',
          'value': '',
          'description': 'Which user, can start the process?',
          'popular': true
        }
      ]
    },
    {
      'name': 'process_potentialstartergrouppackage',
      'properties': [
        {
          'id': 'process_potentialstartergroup',
          'type': 'String',
          'title': 'Potential starter group',
          'value': '',
          'description': 'Which group, can start the process?',
          'popular': true
        }
      ]
    },
    {
      'name': 'process_namespacepackage',
      'properties': [
        {
          'id': 'process_namespace',
          'type': 'String',
          'title': 'Target namespace',
          'value': 'http://www.flowable.org/processdef',
          'description': 'Target namespace for the process definition.',
          'popular': true
        }
      ]
    },
    {
      'name': 'process_iseagerexecutionfetchpackage',
      'properties': [
        {
          'id': 'iseagerexecutionfetch',
          'type': 'Boolean',
          'title': 'Eager execution fetching',
          'value': 'false',
          'description': 'Enable eager execution fetching for this process definition?',
          'popular': true
        }
      ]
    },
    {
      'name': 'asynchronousdefinitionpackage',
      'properties': [
        {
          'id': 'asynchronousdefinition',
          'type': 'Boolean',
          'title': 'Asynchronous',
          'value': 'false',
          'description': 'Define the activity as asynchronous.',
          'popular': true
        }
      ]
    },
    {
      'name': 'datapropertiespackage',
      'properties': [
        {
          'id': 'dataproperties',
          'type': 'Complex',
          'title': 'Data Objects',
          'value': '',
          'description': 'Definition of the data object properties',
          'popular': true
        }
      ]
    },
    {
      'name': 'exclusivedefinitionpackage',
      'properties': [
        {
          'id': 'exclusivedefinition',
          'type': 'Boolean',
          'title': 'Exclusive',
          'value': 'false',
          'description': 'Define the activity as exclusive.',
          'popular': true
        }
      ]
    },
    {
      'name': 'executionlistenerspackage',
      'properties': [
        {
          'id': 'executionlisteners',
          'type': 'multiplecomplex',
          'title': 'Execution listeners',
          'value': '',
          'description': 'Listeners for an activity, process, sequence flow, start and end event.',
          'popular': true
        }
      ]
    },
    {
      'name': 'tasklistenerspackage',
      'properties': [
        {
          'id': 'tasklisteners',
          'type': 'multiplecomplex',
          'title': 'Task listeners',
          'value': '',
          'description': 'Listeners for a user task',
          'popular': true
        }
      ]
    },
    {
      'name': 'eventlistenerspackage',
      'properties': [
        {
          'id': 'eventlisteners',
          'type': 'multiplecomplex',
          'title': 'Event listeners',
          'value': '',
          'description': 'Listeners for any event happening in the Flowable Engine. It\'s also possible to rethrow the event as a signal, message or error event',
          'popular': true
        }
      ]
    },
    {
      'name': 'usertaskassignmentpackage',
      'properties': [
        {
          'id': 'usertaskassignment',
          'type': 'Complex',
          'title': 'Assignments',
          'value': '',
          'description': 'Assignment definition for the user task',
          'popular': true
        }
      ]
    },
    {
      'name': 'formpropertiespackage',
      'properties': [
        {
          'id': 'formproperties',
          'type': 'Complex',
          'title': 'Form properties',
          'value': '',
          'description': 'Definition of the form with a list of form properties',
          'popular': true
        }
      ]
    },
    {
      'name': 'formkeydefinitionpackage',
      'properties': [
        {
          'id': 'formkeydefinition',
          'type': 'String',
          'title': 'Form key',
          'value': '',
          'description': 'Form key that provides a reference to a form.',
          'popular': true
        }
      ]
    },
    {
      'name': 'duedatedefinitionpackage',
      'properties': [
        {
          'id': 'duedatedefinition',
          'type': 'String',
          'title': 'Due date',
          'value': '',
          'description': 'Due date of the user task.',
          'popular': true
        }
      ]
    },
    {
      'name': 'prioritydefinitionpackage',
      'properties': [
        {
          'id': 'prioritydefinition',
          'type': 'String',
          'title': 'Priority',
          'value': '',
          'description': 'Priority of the user task.',
          'popular': true
        }
      ]
    },
    {
      'name': 'servicetaskclasspackage',
      'properties': [
        {
          'id': 'servicetaskclass',
          'type': 'String',
          'title': 'Class',
          'value': '',
          'description': 'Class that implements the service task logic.',
          'popular': true
        }
      ]
    },
    {
      'name': 'servicetaskexpressionpackage',
      'properties': [
        {
          'id': 'servicetaskexpression',
          'type': 'Text',
          'title': 'Expression',
          'value': '',
          'description': 'Service task logic defined with an expression.',
          'popular': true
        }
      ]
    },
    {
      'name': 'servicetaskdelegateexpressionpackage',
      'properties': [
        {
          'id': 'servicetaskdelegateexpression',
          'type': 'Text',
          'title': 'Delegate expression',
          'value': '',
          'description': 'Service task logic defined with a delegate expression.',
          'popular': true
        }
      ]
    },
    {
      'name': 'servicetaskfieldspackage',
      'properties': [
        {
          'id': 'servicetaskfields',
          'type': 'Complex',
          'title': 'Class fields',
          'value': '',
          'description': 'Field extensions',
          'popular': true
        }
      ]
    },
    {
      'name': 'servicetaskresultvariablepackage',
      'properties': [
        {
          'id': 'servicetaskresultvariable',
          'type': 'String',
          'title': 'Result variable name',
          'value': '',
          'description': 'Process variable name to store the service task result.',
          'popular': true
        }
      ]
    },
    {
      'name': 'servicetaskresultvariablepackage',
      'properties': [
        {
          'id': 'servicetaskUseLocalScopeForResultVariable',
          'type': 'Boolean',
          'title': 'Use local scope for result variable',
          'value': 'false',
          'description': 'Flag that marks that the used resultVariable needs to be saved as a local variable',
          'popular': true
        }
      ]
    },
    {
      'name': 'servicetasktriggerablepackage',
      'properties': [
        {
          'id': 'servicetasktriggerable',
          'type': 'Boolean',
          'title': 'Set service task to be triggerable',
          'value': 'false',
          'description': 'Sets the service task to be triggerable',
          'popular': true
        }
      ]
    },
    {
      'name': 'scriptformatpackage',
      'properties': [
        {
          'id': 'scriptformat',
          'type': 'String',
          'title': 'Script format',
          'value': '',
          'description': 'Script format of the script task.',
          'popular': true
        }
      ]
    },
    {
      'name': 'scripttextpackage',
      'properties': [
        {
          'id': 'scripttext',
          'type': 'Text',
          'title': 'Script',
          'value': '',
          'description': 'Script text of the script task.',
          'popular': true
        }
      ]
    },
    {
      'name': 'scriptautostorevariablespackage',
      'properties': [
        {
          'id': 'scriptautostorevariables',
          'type': 'Boolean',
          'title': 'Auto Store Variables',
          'value': 'false',
          'description': 'Automatically store all script variables to the process.',
          'popular': true
        }
      ]
    },
    {
      'name': 'shellcommandpackage',
      'properties': [
        {
          'id': 'shellcommand',
          'type': 'String',
          'title': 'Command',
          'value': '',
          'description': 'Shell task command',
          'popular': true
        }
      ]
    },
    {
      'name': 'shellarg1package',
      'properties': [
        {
          'id': 'shellarg1',
          'type': 'Text',
          'title': 'Argument 1',
          'value': '',
          'description': 'Shell commnad arg 1',
          'popular': true
        }
      ]
    },
    {
      'name': 'shellarg2package',
      'properties': [
        {
          'id': 'shellarg2',
          'type': 'Text',
          'title': 'Argument 2',
          'value': '',
          'description': 'Shell commnad arg 2',
          'popular': true
        }
      ]
    },
    {
      'name': 'shellarg3package',
      'properties': [
        {
          'id': 'shellarg3',
          'type': 'Text',
          'title': 'Argument 3',
          'value': '',
          'description': 'Shell commnad arg 3',
          'popular': true
        }
      ]
    },
    {
      'name': 'shellarg4package',
      'properties': [
        {
          'id': 'shellarg4',
          'type': 'Text',
          'title': 'Argument 4',
          'value': '',
          'description': 'Shell commnad arg 4',
          'popular': true
        }
      ]
    },
    {
      'name': 'shellarg5package',
      'properties': [
        {
          'id': 'shellarg5',
          'type': 'Text',
          'title': 'Argument 5',
          'value': '',
          'description': 'Shell commnad arg 5',
          'popular': true
        }
      ]
    },
    {
      'name': 'shellwaitpackage',
      'properties': [
        {
          'id': 'shellwait',
          'type': 'Text',
          'title': 'Wait',
          'value': '',
          'description': 'Flag to wait for shell command execution end',
          'popular': true
        }
      ]
    },
    {
      'name': 'shelloutputvariablepackage',
      'properties': [
        {
          'id': 'shelloutputvariable',
          'type': 'Text',
          'title': 'Output variable',
          'value': '',
          'description': 'Variable to store shell commnad output',
          'popular': true
        }
      ]
    },
    {
      'name': 'shellerrorcodevariablepackage',
      'properties': [
        {
          'id': 'shellerrorcodevariable',
          'type': 'Text',
          'title': 'Error code variable',
          'value': '',
          'description': 'Variable to store shell commnad error code',
          'popular': true
        }
      ]
    },
    {
      'name': 'shellredirecterrorpackage',
      'properties': [
        {
          'id': 'shellredirecterror',
          'type': 'Text',
          'title': 'Redirect error',
          'value': '',
          'description': 'If true merge error output with standard output',
          'popular': true
        }
      ]
    },
    {
      'name': 'shellcleanenvpackage',
      'properties': [
        {
          'id': 'shellcleanenv',
          'type': 'Text',
          'title': 'Clean env',
          'value': '',
          'description': 'Clean shell execution environment',
          'popular': true
        }
      ]
    },
    {
      'name': 'shelldirectorypackage',
      'properties': [
        {
          'id': 'shelldirectory',
          'type': 'Text',
          'title': 'Directory',
          'value': '',
          'description': 'Shell process working directory',
          'popular': true
        }
      ]
    },
    {
      'name': 'ruletask_rulespackage',
      'properties': [
        {
          'id': 'ruletask_rules',
          'type': 'String',
          'title': 'Rules',
          'value': '',
          'description': 'Rules of the rule task.',
          'popular': true
        }
      ]
    },
    {
      'name': 'ruletask_variables_inputpackage',
      'properties': [
        {
          'id': 'ruletask_variables_input',
          'type': 'String',
          'title': 'Input variables',
          'value': '',
          'description': 'Input variables of the rule task.',
          'popular': true
        }
      ]
    },
    {
      'name': 'ruletask_excludepackage',
      'properties': [
        {
          'id': 'ruletask_exclude',
          'type': 'Boolean',
          'title': 'Exclude',
          'value': 'false',
          'description': 'Use the rules property as exclusion.',
          'popular': true
        }
      ]
    },
    {
      'name': 'ruletask_resultpackage',
      'properties': [
        {
          'id': 'ruletask_result',
          'type': 'String',
          'title': 'Result variable',
          'value': '',
          'description': 'Result variable of the rule task.',
          'popular': true
        }
      ]
    },
    {
      'name': 'mailtaskheaderspackage',
      'properties': [
        {
          'id': 'mailtaskheaders',
          'type': 'Text',
          'title': 'Headers',
          'value': '',
          'description': 'Line separated Mail headers (For example - X-Attribute: value).',
          'popular': true
        }
      ]
    },
    {
      'name': 'mailtasktopackage',
      'properties': [
        {
          'id': 'mailtaskto',
          'type': 'Text',
          'title': 'To',
          'value': '',
          'description': 'The recipients if the e-mail. Multiple recipients are defined in a comma-separated list.',
          'popular': true
        }
      ]
    },
    {
      'name': 'mailtaskfrompackage',
      'properties': [
        {
          'id': 'mailtaskfrom',
          'type': 'Text',
          'title': 'From',
          'value': '',
          'description': 'The sender e-mail address. If not provided, the default configured from address is used.',
          'popular': true
        }
      ]
    },
    {
      'name': 'mailtasksubjectpackage',
      'properties': [
        {
          'id': 'mailtasksubject',
          'type': 'Text',
          'title': 'Subject',
          'value': '',
          'description': 'The subject of the e-mail.',
          'popular': true
        }
      ]
    },
    {
      'name': 'mailtaskccpackage',
      'properties': [
        {
          'id': 'mailtaskcc',
          'type': 'Text',
          'title': 'Cc',
          'value': '',
          'description': 'The cc\'s of the e-mail. Multiple recipients are defined in a comma-separated list',
          'popular': true
        }
      ]
    },
    {
      'name': 'mailtaskbccpackage',
      'properties': [
        {
          'id': 'mailtaskbcc',
          'type': 'Text',
          'title': 'Bcc',
          'value': '',
          'description': 'The bcc\'s of the e-mail. Multiple recipients are defined in a comma-separated list',
          'popular': true
        }
      ]
    },
    {
      'name': 'mailtasktextpackage',
      'properties': [
        {
          'id': 'mailtasktext',
          'type': 'Text',
          'title': 'Text',
          'value': '',
          'description': 'The content of the e-mail, in case one needs to send plain none-rich e-mails. Can be used in combination with html, for e-mail clients that don\'t support rich content. The client will then fall back to this text-only alternative.',
          'popular': true
        }
      ]
    },
    {
      'name': 'mailtaskhtmlpackage',
      'properties': [
        {
          'id': 'mailtaskhtml',
          'type': 'Text',
          'title': 'Html',
          'value': '',
          'description': 'A piece of HTML that is the content of the e-mail.',
          'popular': true
        }
      ]
    },
    {
      'name': 'mailtaskcharsetpackage',
      'properties': [
        {
          'id': 'mailtaskcharset',
          'type': 'String',
          'title': 'Charset',
          'value': '',
          'description': 'Allows to change the charset of the email, which is necessary for many non-English languages. ',
          'popular': true
        }
      ]
    },
    {
      'name': 'httptaskrequestmethodpackage',
      'properties': [
        {
          'id': 'httptaskrequestmethod',
          'type': 'flowable-http-request-method',
          'title': 'Request method',
          'value': '',
          'description': 'Request method (For example - GET,POST,PUT etc).',
          'popular': true
        }
      ]
    },
    {
      'name': 'httptaskrequesturlpackage',
      'properties': [
        {
          'id': 'httptaskrequesturl',
          'type': 'Text',
          'title': 'Request URL',
          'value': '',
          'description': 'Request URL (For example - http://flowable.org).',
          'popular': true
        }
      ]
    },
    {
      'name': 'httptaskrequestheaderspackage',
      'properties': [
        {
          'id': 'httptaskrequestheaders',
          'type': 'Text',
          'title': 'Request headers',
          'value': '',
          'description': 'Line separated HTTP request headers (For example - Content-Type: application/json).',
          'popular': true
        }
      ]
    },
    {
      'name': 'httptaskrequestbodypackage',
      'properties': [
        {
          'id': 'httptaskrequestbody',
          'type': 'Text',
          'title': 'Request body',
          'value': '',
          'description': 'Request body (For example- ${sampleBody}).', // eslint-disable-line
          'popular': true
        }
      ]
    },
    {
      'name': 'httptaskrequestbodyencodingpackage',
      'properties': [
        {
          'id': 'httptaskrequestbodyencoding',
          'type': 'Text',
          'title': 'Request body encoding',
          'value': '',
          'description': 'Request body encoding (For example- UTF-8).',
          'popular': true
        }
      ]
    },
    {
      'name': 'httptaskrequesttimeoutpackage',
      'properties': [
        {
          'id': 'httptaskrequesttimeout',
          'type': 'String',
          'title': 'Request timeout',
          'value': '',
          'description': 'Timeout in milliseconds for the request (For example - 5000).',
          'popular': true
        }
      ]
    },
    {
      'name': 'httptaskdisallowredirectspackage',
      'properties': [
        {
          'id': 'httptaskdisallowredirects',
          'type': 'String',
          'title': 'Disallow redirects',
          'value': '',
          'description': 'Flag to disallow HTTP redirects.',
          'popular': true
        }
      ]
    },
    {
      'name': 'httptaskfailstatuscodespackage',
      'properties': [
        {
          'id': 'httptaskfailstatuscodes',
          'type': 'String',
          'title': 'Fail status codes',
          'value': '',
          'description': 'Comma separated list of HTTP response status codes to retry, for example 400,5XX.',
          'popular': true
        }
      ]
    },
    {
      'name': 'httptaskhandlestatuscodespackage',
      'properties': [
        {
          'id': 'httptaskhandlestatuscodes',
          'type': 'String',
          'title': 'Handle status codes',
          'value': '',
          'description': 'Comma separated list of HTTP response status codes to ignore, for example 404,3XX.',
          'popular': true
        }
      ]
    },
    {
      'name': 'httptaskignoreexceptionpackage',
      'properties': [
        {
          'id': 'httptaskignoreexception',
          'type': 'String',
          'title': 'Ignore exception',
          'value': '',
          'description': 'Flag to ignore exceptions.',
          'popular': true
        }
      ]
    },
    {
      'name': 'httptasksaveresponseparameterstransientpackage',
      'properties': [
        {
          'id': 'httptasksaveresponseparameterstransient',
          'type': 'String',
          'title': 'Save response as a transient variable',
          'value': '',
          'description': 'Flag indicating to store the response variable(s) transient',
          'popular': true
        }
      ]
    },
    {
      'name': 'httptasksaveresponseasjsonpackage',
      'properties': [
        {
          'id': 'httptasksaveresponseasjson',
          'type': 'String',
          'title': 'Save response as JSON',
          'value': '',
          'description': 'Flag indicating to store the response variable as a JSON variable instead of a String',
          'popular': true
        }
      ]
    },
    {
      'name': 'skipexpressionpackage',
      'properties': [
        {
          'id': 'skipexpression',
          'type': 'String',
          'title': 'Skip expression',
          'value': '',
          'description': 'Skip an expression execution associated with task or association or not.',
          'popular': true
        }
      ]
    },
    {
      'name': 'httptaskresponsevariablenamepackage',
      'properties': [
        {
          'id': 'httptaskresponsevariablename',
          'type': 'String',
          'title': 'Response variable name',
          'value': '',
          'description': 'Define the variable name to store the http response.',
          'popular': true
        }
      ]
    },
    {
      'name': 'httptasksaverequestvariablespackage',
      'properties': [
        {
          'id': 'httptasksaverequestvariables',
          'type': 'String',
          'title': 'Save request variables',
          'value': '',
          'description': 'Flag to save request variables.',
          'popular': true
        }
      ]
    },
    {
      'name': 'httptasksaveresponseparameterspackage',
      'properties': [
        {
          'id': 'httptasksaveresponseparameters',
          'type': 'String',
          'title': 'Save response status, headers',
          'value': '',
          'description': 'Flag to save response status, headers etc.',
          'popular': true
        }
      ]
    },
    {
      'name': 'httptaskresultvariableprefixpackage',
      'properties': [
        {
          'id': 'httptaskresultvariableprefix',
          'type': 'String',
          'title': 'Result variable prefix',
          'value': '',
          'description': 'Prefix for the execution variable names.',
          'popular': true
        }
      ]
    },
    {
      'name': 'callactivitycalledelementpackage',
      'properties': [
        {
          'id': 'callactivitycalledelement',
          'type': 'String',
          'title': 'Called element',
          'value': '',
          'description': 'Process reference.',
          'popular': true
        }
      ]
    },
    {
      'name': 'callactivitycalledelementtypepackage',
      'properties': [
        {
          'id': 'callactivitycalledelementtype',
          'type': 'flowable-calledelementtype',
          'title': 'Called element type',
          'value': 'key',
          'description': 'Type of the used process reference.',
          'popular': true
        }
      ]
    },
    {
      'name': 'callactivityinparameterspackage',
      'properties': [
        {
          'id': 'callactivityinparameters',
          'type': 'Complex',
          'title': 'In parameters',
          'value': '',
          'description': 'Definition of the input parameters',
          'popular': true
        }
      ]
    },
    {
      'name': 'callactivityoutparameterspackage',
      'properties': [
        {
          'id': 'callactivityoutparameters',
          'type': 'Complex',
          'title': 'Out parameters',
          'value': '',
          'description': 'Definition of the output parameters',
          'popular': true
        }
      ]
    },
    {
      'name': 'callactivityinheritvariablespackage',
      'properties': [
        {
          'id': 'callactivityinheritvariables',
          'type': 'Boolean',
          'title': 'Inherit variables in sub process',
          'value': 'false',
          'description': 'Inherit parent process variables in the sub process.',
          'popular': true
        }
      ]
    },
    {
      'name': 'callactivitysamedeploymentpackage',
      'properties': [
        {
          'id': 'callactivitysamedeployment',
          'type': 'Boolean',
          'title': 'Start the referenced process from the same deployment.',
          'value': 'false',
          'description': 'Use the referenced process from the same deployment.',
          'popular': true
        }
      ]
    },
    {
      'name': 'callactivityfallbacktodefaulttenantpackage',
      'properties': [
        {
          'id': 'callactivityfallbacktodefaulttenant',
          'type': 'Boolean',
          'title': 'Fallback to default tenant',
          'value': 'false',
          'description': 'Look for the definition by key in the default tenant when current tenant search fails.',
          'popular': true
        }
      ]
    },
    {
      'name': 'callactivityprocessinstancenamepackage',
      'properties': [
        {
          'id': 'callactivityprocessinstancename',
          'type': 'String',
          'title': 'Process instance name',
          'value': '',
          'description': 'An expression that resolves to the name of the child process instance',
          'popular': true
        }
      ]
    },
    {
      'name': 'callactivityinheritbusinesskeypackage',
      'properties': [
        {
          'id': 'callactivityinheritbusinesskey',
          'type': 'Boolean',
          'title': 'Inherit business key',
          'value': 'false',
          'description': 'Inherit the business key from the parent process.',
          'popular': true
        }
      ]
    },
    {
      'name': 'callactivityuselocalscopeforoutparameterspackage',
      'properties': [
        {
          'id': 'callactivityuselocalscopeforoutparameters',
          'type': 'Boolean',
          'title': 'Use local scope for out parameters',
          'value': 'false',
          'description': 'Use local variable scope for out parameters.',
          'popular': true
        }
      ]
    },
    {
      'name': 'callactivitybusinesskeypackage',
      'properties': [
        {
          'id': 'callactivitybusinesskey',
          'type': 'String',
          'title': 'Business key expression',
          'value': '',
          'description': 'An expression that resolves to a business key for the child process instance',
          'popular': true
        }
      ]
    },
    {
      'name': 'callactivitycompleteasyncpackage',
      'properties': [
        {
          'id': 'callactivitycompleteasync',
          'type': 'Boolean',
          'title': 'Complete asynchronously',
          'value': '',
          'description': 'If set, the child process ending and completing the call activity is done asynchronously. Useful when using parallel multi instance with a called process definition that has async tasks.',
          'popular': true
        }
      ]
    },
    {
      'name': 'cameltaskcamelcontextpackage',
      'properties': [
        {
          'id': 'cameltaskcamelcontext',
          'type': 'String',
          'title': 'Camel context',
          'value': '',
          'description': 'An optional camel context definition, if left empty the default is used.',
          'popular': true
        }
      ]
    },
    {
      'name': 'muletaskendpointurlpackage',
      'properties': [
        {
          'id': 'muletaskendpointurl',
          'type': 'String',
          'title': 'Endpoint url',
          'value': '',
          'description': 'A required endpoint url to sent the message to Mule.',
          'popular': true
        }
      ]
    },
    {
      'name': 'muletasklanguagepackage',
      'properties': [
        {
          'id': 'muletasklanguage',
          'type': 'String',
          'title': 'Language',
          'value': '',
          'description': 'A required definition for the language to resolve the payload expression, like juel.',
          'popular': true
        }
      ]
    },
    {
      'name': 'muletaskpayloadexpressionpackage',
      'properties': [
        {
          'id': 'muletaskpayloadexpression',
          'type': 'Text',
          'title': 'Payload expression',
          'value': '',
          'description': 'A required definition for the payload of the message sent to Mule.',
          'popular': true
        }
      ]
    },
    {
      'name': 'muletaskresultvariablepackage',
      'properties': [
        {
          'id': 'muletaskresultvariable',
          'type': 'String',
          'title': 'Result variable',
          'value': '',
          'description': 'An optional result variable for the payload returned.',
          'popular': true
        }
      ]
    },
    {
      'name': 'conditionsequenceflowpackage',
      'properties': [
        {
          'id': 'conditionsequenceflow',
          'type': 'Complex',
          'title': 'Flow condition',
          'value': '',
          'description': 'The condition of the sequence flow',
          'popular': true
        }
      ]
    },
    {
      'name': 'defaultflowpackage',
      'properties': [
        {
          'id': 'defaultflow',
          'type': 'Boolean',
          'title': 'Default flow',
          'value': 'false',
          'description': 'Define the sequence flow as default',
          'popular': true,
          'refToView': 'default'
        }
      ]
    },
    {
      'name': 'conditionalflowpackage',
      'properties': [
        {
          'id': 'conditionalflow',
          'type': 'Boolean',
          'title': 'Conditional flow',
          'value': 'false',
          'description': 'Define the sequence flow with a condition',
          'popular': true
        }
      ]
    },
    {
      'name': 'timercycledefinitionpackage',
      'properties': [
        {
          'id': 'timercycledefinition',
          'type': 'String',
          'title': 'Time cycle (e.g. R3/PT10H)',
          'value': '',
          'description': 'Define the timer with a ISO-8601 cycle.',
          'popular': true
        }
      ]
    },
    {
      'name': 'timerdatedefinitionpackage',
      'properties': [
        {
          'id': 'timerdatedefinition',
          'type': 'String',
          'title': 'Time date in ISO-8601',
          'value': '',
          'description': 'Define the timer with a ISO-8601 date definition.',
          'popular': true
        }
      ]
    },
    {
      'name': 'timerdurationdefinitionpackage',
      'properties': [
        {
          'id': 'timerdurationdefinition',
          'type': 'String',
          'title': 'Time duration (e.g. PT5M)',
          'value': '',
          'description': 'Define the timer with a ISO-8601 duration.',
          'popular': true
        }
      ]
    },
    {
      'name': 'timerenddatedefinitionpackage',
      'properties': [
        {
          'id': 'timerenddatedefinition',
          'type': 'String',
          'title': 'Time End Date in ISO-8601',
          'value': '',
          'description': 'Define the timer with a ISO-8601 duration.',
          'popular': true
        }
      ]
    },
    {
      'name': 'messagerefpackage',
      'properties': [
        {
          'id': 'messageref',
          'type': 'String',
          'title': 'Message reference',
          'value': '',
          'description': 'Define the message name.',
          'popular': true
        }
      ]
    },
    {
      'name': 'signalrefpackage',
      'properties': [
        {
          'id': 'signalref',
          'type': 'String',
          'title': 'Signal reference',
          'value': '',
          'description': 'Define the signal name.',
          'popular': true
        }
      ]
    },
    {
      'name': 'errorrefpackage',
      'properties': [
        {
          'id': 'errorref',
          'type': 'String',
          'title': 'Error reference',
          'value': '',
          'description': 'Define the error name.',
          'popular': true
        }
      ]
    },
    {
      'name': 'cancelactivitypackage',
      'properties': [
        {
          'id': 'cancelactivity',
          'type': 'Boolean',
          'title': 'Cancel activity',
          'value': 'true',
          'description': 'Should the activity be cancelled',
          'popular': true,
          'refToView': [
            'frame',
            'frame2'
          ]
        }
      ]
    },
    {
      'name': 'initiatorpackage',
      'properties': [
        {
          'id': 'initiator',
          'type': 'String',
          'title': 'Initiator',
          'value': '',
          'description': 'Initiator of the process.',
          'popular': true
        }
      ]
    },
    {
      'name': 'textpackage',
      'properties': [
        {
          'id': 'text',
          'type': 'String',
          'title': 'Text',
          'value': '',
          'description': 'The text of the text annotation.',
          'popular': true,
          'refToView': 'text'
        }
      ]
    },
    {
      'name': 'multiinstance_typepackage',
      'properties': [
        {
          'id': 'multiinstance_type',
          'type': 'flowable-multiinstance',
          'title': 'Multi-instance type',
          'value': 'None',
          'description': 'Repeated activity execution (parallel or sequential) can be displayed through different loop types',
          'popular': true,
          'refToView': 'multiinstance'
        }
      ]
    },
    {
      'name': 'multiinstance_cardinalitypackage',
      'properties': [
        {
          'id': 'multiinstance_cardinality',
          'type': 'String',
          'title': 'Cardinality (Multi-instance)',
          'value': '',
          'description': 'Define the cardinality of multi instance.',
          'popular': true
        }
      ]
    },
    {
      'name': 'multiinstance_collectionpackage',
      'properties': [
        {
          'id': 'multiinstance_collection',
          'type': 'String',
          'title': 'Collection (Multi-instance)',
          'value': '',
          'description': 'Define the collection for the multi instance.',
          'popular': true
        }
      ]
    },
    {
      'name': 'multiinstance_variablepackage',
      'properties': [
        {
          'id': 'multiinstance_variable',
          'type': 'String',
          'title': 'Element variable (Multi-instance)',
          'value': '',
          'description': 'Define the element variable for the multi instance.',
          'popular': true
        }
      ]
    },
    {
      'name': 'multiinstance_conditionpackage',
      'properties': [
        {
          'id': 'multiinstance_condition',
          'type': 'String',
          'title': 'Completion condition (Multi-instance)',
          'value': '',
          'description': 'Define the completion condition for the multi instance.',
          'popular': true
        }
      ]
    },
    {
      'name': 'isforcompensationpackage',
      'properties': [
        {
          'id': 'isforcompensation',
          'type': 'Boolean',
          'title': 'Is for compensation',
          'value': 'false',
          'description': 'A flag that identifies whether this activity is intended for the purposes of compensation.',
          'popular': true,
          'refToView': 'compensation'
        }
      ]
    },
    {
      'name': 'sequencefloworderpackage',
      'properties': [
        {
          'id': 'sequencefloworder',
          'type': 'Complex',
          'title': 'Flow order',
          'value': '',
          'description': 'Order outgoing sequence flows.',
          'popular': true
        }
      ]
    },
    {
      'name': 'signaldefinitionspackage',
      'properties': [
        {
          'id': 'signaldefinitions',
          'type': 'multiplecomplex',
          'title': 'Signal definitions',
          'value': '',
          'description': 'Signal definitions',
          'popular': true
        }
      ]
    },
    {
      'name': 'messagedefinitionspackage',
      'properties': [
        {
          'id': 'messagedefinitions',
          'type': 'multiplecomplex',
          'title': 'Message definitions',
          'value': '',
          'description': 'Message definitions',
          'popular': true
        }
      ]
    },
    {
      'name': 'istransactionpackage',
      'properties': [
        {
          'id': 'istransaction',
          'type': 'Boolean',
          'title': 'Is a transaction sub process',
          'value': 'false',
          'description': 'A flag that identifies whether this sub process is of type transaction.',
          'popular': true,
          'refToView': 'border'
        }
      ]
    },
    {
      'name': 'formreferencepackage',
      'properties': [
        {
          'id': 'formreference',
          'type': 'Complex',
          'title': 'Form reference',
          'value': '',
          'description': 'Reference to a form',
          'popular': true
        }
      ]
    },
    {
      'name': 'terminateAllpackage',
      'properties': [
        {
          'id': 'terminateAll',
          'type': 'Boolean',
          'title': 'Terminate all',
          'value': 'false',
          'description': 'Enable to terminate the process instance',
          'popular': true
        }
      ]
    },
    {
      'name': 'decisiontaskdecisiontablereferencepackage',
      'properties': [
        {
          'id': 'decisiontaskdecisiontablereference',
          'type': 'Complex',
          'title': 'Decision table reference',
          'value': '',
          'description': 'Set the decision table reference',
          'popular': true
        }
      ]
    },
    {
      'name': 'decisiontaskthrowerroronnohitspackage',
      'properties': [
        {
          'id': 'decisiontaskthrowerroronnohits',
          'type': 'Boolean',
          'title': 'Throw error if no rules were hit',
          'value': 'false',
          'description': 'Should an error be thrown if no rules of the decision table were hit and consequently no result was found.',
          'popular': true
        }
      ]
    },
    {
      'name': 'decisiontaskfallbacktodefaulttenantpackage',
      'properties': [
        {
          'id': 'decisiontaskfallbacktodefaulttenant',
          'type': 'Boolean',
          'title': 'Fallback to default tenant',
          'value': 'false',
          'description': 'Find decision definition without tenant when previous attemps to find it with tenant failed.',
          'popular': true
        }
      ]
    },
    {
      'name': 'interruptingpackage',
      'properties': [
        {
          'id': 'interrupting',
          'type': 'Boolean',
          'title': 'Interrupting',
          'value': 'true',
          'description': 'Should all parent executions be terminated?',
          'popular': true,
          'refToView': [
            'frame'
          ]
        }
      ]
    },
    {
      'name': 'completionconditionpackage',
      'properties': [
        {
          'id': 'completioncondition',
          'type': 'String',
          'title': 'Completion condition',
          'value': '',
          'description': 'The completion condition for the adhoc sub process',
          'popular': true
        }
      ]
    },
    {
      'name': 'orderingpackage',
      'properties': [
        {
          'id': 'ordering',
          'type': 'flowable-ordering',
          'title': 'Ordering',
          'value': 'Parallel',
          'description': 'The ordering for the adhoc sub process',
          'popular': true
        }
      ]
    },
    {
      'name': 'cancelremaininginstancespackage',
      'properties': [
        {
          'id': 'cancelremaininginstances',
          'type': 'Boolean',
          'title': 'Cancel remaining instances',
          'value': 'true',
          'description': 'Cancel the remaining instances for the adhoc sub process?',
          'popular': true
        }
      ]
    }
  ],
  'stencils': [
    {
      'type': 'node',
      'id': 'StartNoneEvent',
      'title': '开始',
      'description': 'A start event without a specific trigger',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="15" stroke="#585858" fill="#ffffff" stroke-width="1"/>\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="33" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      'icon': 'startevent/none.png',
      'groups': [
        '基础元素'
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage',
        'initiatorpackage',
        'formkeydefinitionpackage',
        'formreferencepackage',
        'formpropertiespackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'sequence_start',
        'Startevents_all',
        'StartEventsMorph',
        'all'
      ]
    },
    {
      'type': 'node',
      'id': 'UserTask',
      'title': '活动节点',
      'description': '扩展活动节点',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:oryx="http://www.b3mn.org/oryx" xmlns:xlink="http://www.w3.org/1999/xlink" width="138" height="74" version="1.0"><defs></defs><oryx:magnets><oryx:magnet oryx:cx="1" oryx:cy="18" oryx:anchors="left"/><oryx:magnet oryx:cx="1" oryx:cy="36" oryx:anchors="left"/><oryx:magnet oryx:cx="1" oryx:cy="54" oryx:anchors="left"/><oryx:magnet oryx:cx="34" oryx:cy="71" oryx:anchors="bottom"/><oryx:magnet oryx:cx="68" oryx:cy="71" oryx:anchors="bottom"/><oryx:magnet oryx:cx="102" oryx:cy="71" oryx:anchors="bottom"/><oryx:magnet oryx:cx="135" oryx:cy="18" oryx:anchors="right"/><oryx:magnet oryx:cx="135" oryx:cy="36" oryx:anchors="right"/><oryx:magnet oryx:cx="135" oryx:cy="54" oryx:anchors="right"/><oryx:magnet oryx:cx="34" oryx:cy="1" oryx:anchors="top"/><oryx:magnet oryx:cx="68" oryx:cy="1" oryx:anchors="top"/><oryx:magnet oryx:cx="102" oryx:cy="1" oryx:anchors="top"/><oryx:magnet oryx:cx="68" oryx:cy="36" oryx:default="yes"/></oryx:magnets><g pointer-events="fill" oryx:minimumSize="50 40"><rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="135" height="71" rx="10" ry="10" stroke="none" stroke-width="0" fill="none"/><rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="136" height="72" rx="10" ry="10" stroke="#666666" stroke-width="1" fill="#ffffff"/><line id="number_path" oryx:resize="vertical horizontal" fill="none" stroke="#666666" x1="0" y1="23" x2="137" y2="23" stroke-width="1"/><text font-size="12" id="text_number" x="10" y="6" oryx:align="top left" stroke="#333333" oryx:fittoelem="text_frame">22</text><text font-size="12" id="text_name" x="68" y="36" oryx:align="middle center" oryx:fittoelem="text_frame" stroke="#333333">dd</text><line oryx:resize="vertical horizontal" fill="none" stroke="#666666" x1="0" y1="47" x2="137" y2="47" stroke-width="1"/><text font-size="12" id="text_dates" x="10" y="63" oryx:align="bottom left" oryx:fittoelem="text_frame" fill="#999999">1</text><text font-size="12" id="text_system" x="126" y="63" oryx:align="bottom right" oryx:fittoelem="text_frame" fill="#999999">22222</text><g id="shenpi_sign"><circle id="shen_frame" cx="120" cy="11" r="10" stroke="#E70012" fill="#FFE9E9" fill-opacity="0.5" stroke-width="1"/><text font-size="12" x="120" y="15" oryx:align="center center" oryx:fittoelem="shen_frame" fill="#E70012">审</text></g></g></svg>\n',
      'icon': 'activity/list/type.user.png',
      'groups': [
        '基础元素'
      ],
      'propertyPackages': [
        'numberepackage',
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'usertaskassignmentpackage',
        'outputpackage',
        'inputpackage',
        'important_levelpackage',
        'attachmentpackage',
        'departmentpackage',
        'activerolepackage',
        'activesystempackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all'
      ]
    },
    {
      'type': 'node',
      'id': 'UserTask2',
      'title': '活动节点',
      'description': '活动节点',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:oryx="http://www.b3mn.org/oryx" xmlns:xlink="http://www.w3.org/1999/xlink" width="138" height="74" version="1.0"><defs></defs><oryx:magnets><oryx:magnet oryx:cx="1" oryx:cy="18" oryx:anchors="left"/><oryx:magnet oryx:cx="1" oryx:cy="36" oryx:anchors="left"/><oryx:magnet oryx:cx="1" oryx:cy="54" oryx:anchors="left"/><oryx:magnet oryx:cx="34" oryx:cy="71" oryx:anchors="bottom"/><oryx:magnet oryx:cx="68" oryx:cy="71" oryx:anchors="bottom"/><oryx:magnet oryx:cx="102" oryx:cy="71" oryx:anchors="bottom"/><oryx:magnet oryx:cx="135" oryx:cy="18" oryx:anchors="right"/><oryx:magnet oryx:cx="135" oryx:cy="36" oryx:anchors="right"/><oryx:magnet oryx:cx="135" oryx:cy="54" oryx:anchors="right"/><oryx:magnet oryx:cx="34" oryx:cy="1" oryx:anchors="top"/><oryx:magnet oryx:cx="68" oryx:cy="1" oryx:anchors="top"/><oryx:magnet oryx:cx="102" oryx:cy="1" oryx:anchors="top"/><oryx:magnet oryx:cx="68" oryx:cy="36" oryx:default="yes"/></oryx:magnets><g pointer-events="fill" oryx:minimumSize="50 40"><rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="135" height="71" rx="10" ry="10" stroke="none" stroke-width="0" fill="none"/><rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="136" height="72" rx="10" ry="10" stroke="#E70012" stroke-width="1" stroke-dasharray=\'5\' stroke-opacity="0.2" fill="#FFF8F8"/><line id="number_path" oryx:resize="vertical horizontal" fill="none" stroke="#E70012" stroke-dasharray=\'5\' stroke-opacity="0.2" x1="0" y1="23" x2="137" y2="23" stroke-width="1"/><text font-size="12" id="text_number" x="10" y="6" oryx:align="top left" stroke="#333333" oryx:fittoelem="text_frame">22</text><text font-size="12" id="text_name" x="68" y="36" oryx:align="middle center" oryx:fittoelem="text_frame" stroke="#333333">dd</text><line oryx:resize="vertical horizontal" fill="none" stroke="#E70012" stroke-dasharray=\'5\' stroke-opacity="0.2" x1="0" y1="47" x2="137" y2="47" stroke-width="1"/></g></svg>\n',
      'icon': 'activity/list/type.user.png',
      'groups': [
        '基础元素'
      ],
      'layout': [
        {
          'type': 'layout.task'
        }
      ],
      'propertyPackages': [
        'numberepackage',
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'usertaskassignmentpackage',
        'outputpackage',
        'inputpackage',
        'important_levelpackage',
        'attachmentpackage',
        'departmentpackage',
        'activerolepackage',
        'activesystempackage'
      ],
      'hiddenPropertyPackages': [

      ],
      'roles': [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all'
      ]
    },

    {
      'type': 'node',
      'id': 'FlowBox',
      'title': '盒子',
      'description': '流程盒子',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:oryx="http://www.b3mn.org/oryx" xmlns:xlink="http://www.w3.org/1999/xlink" width="170" height="132" version="1.0"><defs></defs><oryx:magnets><oryx:magnet oryx:cx="1" oryx:cy="37" oryx:anchors="left"/><oryx:magnet oryx:cx="1" oryx:cy="74" oryx:anchors="left"/><oryx:magnet oryx:cx="1" oryx:cy="111" oryx:anchors="left"/><oryx:magnet oryx:cx="25" oryx:cy="109" oryx:anchors="bottom"/><oryx:magnet oryx:cx="50" oryx:cy="109" oryx:anchors="bottom"/><oryx:magnet oryx:cx="75" oryx:cy="109" oryx:anchors="bottom"/><oryx:magnet oryx:cx="147" oryx:cy="37" oryx:anchors="right"/><oryx:magnet oryx:cx="147" oryx:cy="74" oryx:anchors="right"/><oryx:magnet oryx:cx="147" oryx:cy="111" oryx:anchors="right"/><oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top"/><oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top"/><oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top"/><oryx:magnet oryx:cx="74" oryx:cy="55" oryx:default="yes"/></oryx:magnets><g pointer-events="fill" oryx:minimumSize="50 40"><defs><radialGradient id="background" cx="0%" cy="10%" r="100%" fx="20%" fy="10%"><stop offset="0%" stop-color="red" stop-opacity="1"/><stop id="fill_el" offset="100%" stop-color="#ffffff" stop-opacity="1"/></radialGradient></defs><defs><filter id="f1" x="0" y="0" width="200%" height="200%"><feOffset result="offOut" in="SourceGraphic" dx="20" dy="20"/><feGaussianBlur result="blurOut" in="offOut" stdDeviation="10"/><feBlend in="SourceGraphic" in2="blurOut" mode="normal"/></filter></defs><rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="170" height="140" rx="0" ry="0" stroke="none" stroke-width="1" fill="none"/><rect oryx:anchors="vertical horizontal" x="0" y="0" width="140" height="100" stroke="none" stroke-width="0" fill="#C6CFD9" filter="url(#f1)"/><rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="147" height="109" stroke="none" stroke-width="0" fill="#ffffff"/><line id="status-bar" oryx:resize="vertical horizontal" fill="#90BFF6" stroke="#90BFF6" x1="0" y1="1" x2="148" y2="1" stroke-width="8"/><text font-size="12" id="text_number" x="10" y="26" oryx:align="top left" stroke="#333333" oryx:fittoelem="text_frame">22</text><text font-size="12" id="text_name" x="10" y="58" oryx:align="middle left" oryx:fittoelem="text_frame" stroke="#333333">dd</text><text font-size="12" id="text_people" x="10" y="92" oryx:align="bottom left" oryx:fittoelem="text_frame" fill="#999999">people</text><text font-size="12" id="text_system" x="138" y="92" oryx:align="bottom right" oryx:fittoelem="text_frame" fill="#6E97CE">已生效</text></g></svg>\n',
      'icon': 'activity/list/type.user.png',
      'groups': [
        '盒子'
      ],
      'propertyPackages': [
        'numberepackage',
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'usertaskassignmentpackage',
        'outputpackage',
        'inputpackage',
        'important_levelpackage',
        'attachmentpackage',
        'departmentpackage',
        'activerolepackage',
        'activesystempackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'Activity',
        'sequence_start',
        'sequence_end',
        'ActivitiesMorph',
        'all'
      ]
    },
    {
      'type': 'node',
      'id': 'ExclusiveGateway',
      'title': '排他网关',
      'description': 'A choice gateway',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   version="1.0"\n   width="40"\n   height="40">\n  <defs\n     id="defs4" />\n  <oryx:magnets>\n    <oryx:magnet\n       oryx:default="yes"\n       oryx:cy="16"\n       oryx:cx="16" />\n  </oryx:magnets>\t\t\t\t\t\n  <g>\n  \n    <path\n       d="M -4.5,16 L 16,-4.5 L 35.5,16 L 16,35.5z"\n       id="bg_frame"\n       fill="#ffffff"\n       stroke="#585858"\n       style="stroke-width:1" />\n    <g\n       id="cross">\n      <path\n      \tid="crosspath"\n      \tstroke="#585858"\n      \tfill="#585858"\n        d="M 8.75,7.55 L 12.75,7.55 L 23.15,24.45 L 19.25,24.45 z"\n        style="stroke-width:1" />\n      <path\n      \tid="crosspath2"\n      \tstroke="#585858"\n      \tfill="#585858"\n        d="M 8.75,24.45 L 19.25,7.55 L 23.15,7.55 L 12.75,24.45 z"\n        style="stroke-width:1" />\n    </g>\n\t\n\t<text id="text_name" x="26" y="26" oryx:align="left top"/>\n\t\n  </g>\n</svg>\n',
      'icon': 'gateway/exclusive.databased.png',
      'groups': [
        '基础元素'
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'sequencefloworderpackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'sequence_start',
        'GatewaysMorph',
        'sequence_end',
        'all'
      ]
    },
    {
      'type': 'node',
      'id': '并行网关',
      'title': 'Parallel gateway',
      'description': 'A parallel gateway',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   version="1.0"\n   width="40"\n   height="40">\n   \n  <oryx:magnets>\n    <oryx:magnet\n       oryx:default="yes"\n       oryx:cy="16"\n       oryx:cx="16" />\n  </oryx:magnets>\n  <g>\n    <path\n       d="M -4.5,16 L 16,-4.5 L 35.5,16 L 16,35.5z"\n       id="bg_frame"\n       fill="#ffffff"\n       stroke="#585858"\n       style="stroke-width:1" />\n    <path\n       d="M 6.75,16 L 25.75,16 M 16,6.75 L 16,25.75"\n       id="path9"\n       stroke="#585858"\n       style="fill:none;stroke-width:3" />\n    \n\t<text id="text_name" x="26" y="26" oryx:align="left top"/>\n\t\n  </g>\n</svg>\n',
      'icon': 'gateway/parallel.png',
      'groups': [
        '基础元素'
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'sequencefloworderpackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'sequence_start',
        'GatewaysMorph',
        'sequence_end',
        'all'
      ]
    },
    {
      'type': 'node',
      'id': 'EndNoneEvent',
      'title': '结束',
      'description': 'An end event without a specific trigger',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   width="40"\n   height="40"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="16" oryx:cy="16" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill">\n    <circle id="bg_frame" cx="16" cy="16" r="14" stroke="#585858" fill="#ffffff" stroke-width="3"/>\n\t<text font-size="11" \n\t\tid="text_name" \n\t\tx="16" y="32" \n\t\toryx:align="top center" \n\t\tstroke="#373e48"\n\t></text>\n  </g>\n</svg>',
      'icon': 'endevent/none.png',
      'groups': [
        '基础元素'
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'executionlistenerspackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'EndEventsMorph',
        'sequence_end',
        'all'
      ]
    },
    {
      'type': 'node',
      'id': 'BPMNDiagram',
      'title': 'BPMN-Diagram',
      'description': 'A BPMN 2.0 diagram.',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n   width="800"\n   height="600"\n   version="1.0">\n  <defs></defs>\n  <g pointer-events="fill" >\n    <polygon stroke="black" fill="black" stroke-width="1" points="0,0 0,590 9,599 799,599 799,9 790,0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" />\n    <rect id="diagramcanvas" oryx:resize="vertical horizontal" x="0" y="0" width="790" height="590" stroke="black" stroke-width="2" fill="white" />\n    \t<text font-size="22" id="diagramtext" x="400" y="25" oryx:align="top center" stroke="#373e48"></text>\n  </g>\n</svg>',
      'icon': 'diagram.png',
      'groups': [
        'Diagram'
      ],
      'mayBeRoot': true,
      'hide': true,
      'propertyPackages': [
        'process_idpackage',
        'namepackage',
        'documentationpackage',
        'process_authorpackage',
        'process_versionpackage',
        'process_namespacepackage',
        'process_historylevelpackage',
        'isexecutablepackage',
        'datapropertiespackage',
        'executionlistenerspackage',
        'eventlistenerspackage',
        'signaldefinitionspackage',
        'messagedefinitionspackage',
        'process_potentialstarteruserpackage',
        'process_potentialstartergrouppackage',
        'process_iseagerexecutionfetchpackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': []
    },
    {
      'type': 'node',
      'id': 'flowBox',
      'title': 'Flow box',
      'description': 'A sub process scope',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n   width="200"\n   height="160"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="50" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="80" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="110" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="70" oryx:cy="159" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="100" oryx:cy="159" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="130" oryx:cy="159" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="199" oryx:cy="50" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="199" oryx:cy="80" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="199" oryx:cy="110" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="70" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="100" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="130" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="100" oryx:cy="80" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="120 100" oryx:maximumSize="" >\n    <rect id="text_frame" oryx:anchors="bottom top right left" x="0" y="0" width="190" height="160" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:anchors="bottom top right left" x="0" y="0" width="200" height="160" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#ffffff" />\n\t<rect id="border" oryx:anchors="top bottom left right" oryx:resize="vertical horizontal" x="2.5" y="2.5" width="195" height="155" rx="8" ry="8" stroke="black" stroke-width="1" fill="none" />\n\t<text \n\t\tfont-size="12" \n\t\tid="text_name" \n\t\tx="8" \n\t\ty="10" \n\t\toryx:align="top left"\n\t\toryx:fittoelem="text_frame"\n\t\toryx:anchors="left top" \n\t\tstroke="#373e48">\n\t</text>\n\t\n\t<g \tid="parallel"\n\t\ttransform="translate(1)">\n\t\t<path \n\t\t\tid="parallelpath"\n\t\t\toryx:anchors="bottom" \n\t\t\tfill="none" stroke="#bbbbbb" d="M96 145 v10 M100 145 v10 M104 145 v10" \n\t\t\tstroke-width="2"\n\t\t/>\n\t</g>\n\t<g \tid="sequential"\n\t\ttransform="translate(1)">\n\t\t<path \n\t\t\tid="sequentialpath"\n\t\t\toryx:anchors="bottom" \n\t\t\tfill="none" stroke="#bbbbbb" stroke-width="2" d="M95,154h10 M95,150h10 M95,146h10"\n\t\t/>\n\t</g>\n  </g>\n</svg>',
      'icon': 'activity/expanded.subprocess.png',
      'groups': [
        '流程盒子'
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'datapropertiespackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'istransactionpackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'Activity',
        'sequence_start',
        'sequence_end',
        'all'
      ]
    },
    {
      'type': 'node',
      'id': 'CollapsedSubProcess',
      'title': 'Collapsed Sub process',
      'description': 'A sub process scope',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n   width="102"\n   height="82"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="1" oryx:cy="20" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="40" oryx:anchors="left" />\n  \t<oryx:magnet oryx:cx="1" oryx:cy="60" oryx:anchors="left" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="79" oryx:anchors="bottom" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="79" oryx:anchors="bottom" />\n  \t\n  \t<oryx:magnet oryx:cx="99" oryx:cy="20" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="40" oryx:anchors="right" />\n  \t<oryx:magnet oryx:cx="99" oryx:cy="60" oryx:anchors="right" />\n  \t\n  \t<oryx:magnet oryx:cx="25" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="50" oryx:cy="1" oryx:anchors="top" />\n  \t<oryx:magnet oryx:cx="75" oryx:cy="1" oryx:anchors="top" />\n  \t\n  \t<oryx:magnet oryx:cx="50" oryx:cy="40" oryx:default="yes" />\n  </oryx:magnets>\n  <g pointer-events="fill" oryx:minimumSize="50 40">\n\t<rect id="text_frame" oryx:anchors="bottom top right left" x="1" y="1" width="94" height="79" rx="10" ry="10" stroke="none" stroke-width="0" fill="none" />\n\t<rect id="bg_frame" oryx:resize="vertical horizontal" x="0" y="0" width="100" height="80" rx="10" ry="10" stroke="#bbbbbb" stroke-width="1" fill="#f9f9f9" />\n\t\t<text \n\t\t\tfont-size="12" \n\t\t\tid="text_name" \n\t\t\tx="50" \n\t\t\ty="40" \n\t\t\toryx:align="middle center"\n\t\t\toryx:fittoelem="text_frame"\n\t\t\tstroke="#373e48">\n\t\t</text>\n\t<g id="subprocess">\n\t\t<rect height="10" width="10" x="45" y="65" stroke="#bbbbbb" fill="none" />\n\t\t<path d="M50 65 L50 75" stroke="black" />\n\t\t<path d="M45 70 L55 70" stroke="black" />\n\t</g>\n  </g>\n</svg>',
      'icon': 'activity/subprocess.png',
      'groups': [
        '子流程'
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'asynchronousdefinitionpackage',
        'exclusivedefinitionpackage',
        'datapropertiespackage',
        'executionlistenerspackage',
        'multiinstance_typepackage',
        'multiinstance_cardinalitypackage',
        'multiinstance_collectionpackage',
        'multiinstance_variablepackage',
        'multiinstance_conditionpackage',
        'istransactionpackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'Activity',
        'sequence_start',
        'sequence_end',
        'all'
      ]
    },
    {
      'type': 'node',
      'id': 'Pool',
      'title': '泳池',
      'description': 'A pool to stucture the process definition',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:oryx="http://www.b3mn.org/oryx" xmlns:xlink="http://www.w3.org/1999/xlink" width="600" height="250" version="1.0"><defs></defs><oryx:magnets><oryx:magnet oryx:cx="0" oryx:cy="124" oryx:anchors="left"/><oryx:magnet oryx:cx="299" oryx:cy="249" oryx:anchors="bottom"/><oryx:magnet oryx:cx="599" oryx:cy="124" oryx:anchors="right"/><oryx:magnet oryx:cx="299" oryx:cy="0" oryx:anchors="top"/><oryx:magnet oryx:cx="299" oryx:cy="124" oryx:default="yes"/></oryx:magnets><g pointer-events="none"><rect id="border" class="stripable-element-force" oryx:resize="vertical horizontal" x="0" y="0" width="600" height="250" fill="none" stroke-width="1" stroke="#A4BDD7" pointer-events="stroke"/><rect id="caption" oryx:resize="horizontal" oryx:anchors="left top" x="0" y="0" width="600" height="40" stroke="#A4BDD7" stroke-width="1" fill="#F7F7F7" pointer-events="all"/><rect id="caption_title" oryx:anchors="left top" x="0" y="0" width="110" height="40" stroke="#A4BDD7" stroke-width="1" fill="#eff5f9" pointer-events="all" style="cursor: move" /><text x="55" y="20" font-size="12" oryx:fittoelem="caption_title" oryx:anchors="left top" oryx:align="middle center" stroke="#333333">角色</text></g></svg>\n',
      'icon': 'swimlane/pool.png',
      'groups': [
        '水平泳道'
      ],
      'layout': [
        {
          'type': 'layout.bpmn2_0.pool'
        }
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'process_idpackage'
      ],
      'hiddenPropertyPackages': [
        'isexecutablepackage'
      ],
      'roles': [
        'canContainArtifacts',
        'all'
      ]
    },
    {
      'type': 'node',
      'id': 'Lane',
      'title': '泳道',
      'description': 'A lane to stucture the process definition',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:oryx="http://www.b3mn.org/oryx" xmlns:xlink="http://www.w3.org/1999/xlink" width="600" height="250" version="1.0"><defs></defs><g pointer-events="none"><defs></defs><rect id="border" class="stripable-element-force" oryx:resize="vertical horizontal" x="0" y="0" width="600" height="250" fill="none" stroke-width="10" stroke="white" stroke-opacity="0.3" pointer-events="stroke"/><rect id="caption" oryx:anchors="left top bottom" x="0" y="0" width="110" height="250" stroke="#A4BDD7" stroke-width="1" fill="#eff5f9" class="stripable-element-force" pointer-events="all"/><line id="bottom_line" oryx:resize="vertical horizontal" oryx:align="bottom left" visibility="visible" fill="none" stroke="#4694AE" x1="1" y1="250" x2="600" y2="250" stroke-width="1"/><text x="55" y="125" font-size="12" id="text_name" oryx:align="middle center" oryx:anchors="left" oryx:fittoelem="caption" fill="black" stroke="black"></text></g></svg>\n',
      'icon': 'swimlane/lane.png',
      'groups': [
        '水平泳道'
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'departmentpackage',
        'activerolepackage',
        'activesystempackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'PoolChild',
        'canContainArtifacts',
        'all'
      ]
    },
    {
      'type': 'node',
      'id': 'V-Pool',
      'title': 'V-泳池',
      'description': 'A pool to stucture the process definition',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:oryx="http://www.b3mn.org/oryx" xmlns:xlink="http://www.w3.org/1999/xlink" width="250" height="600" version="1.0"><defs></defs><oryx:magnets><oryx:magnet oryx:cx="0" oryx:cy="299" oryx:anchors="left"/><oryx:magnet oryx:cx="124" oryx:cy="599" oryx:anchors="bottom"/><oryx:magnet oryx:cx="249" oryx:cy="299" oryx:anchors="right"/><oryx:magnet oryx:cx="124" oryx:cy="0" oryx:anchors="top"/><oryx:magnet oryx:cx="124" oryx:cy="299" oryx:default="yes"/></oryx:magnets><g pointer-events="none"><defs></defs><rect id="border" class="stripable-element-force" oryx:resize="vertical horizontal" x="0" y="0" width="250" height="600" fill="none" stroke-width="9" stroke="none" visibility="visible" pointer-events="stroke"/><rect id="c" oryx:resize="vertical horizontal" x="0" y="0" width="250" height="600" stroke="black" fill="none" fill-opacity="0.3"/><rect id="caption" oryx:anchors="top left right" x="0" y="0" width="250" height="30" stroke="black" stroke-width="1" fill="white" pointer-events="all"/><rect id="captionDisableAntialiasing" oryx:anchors="top left right" x="0" y="0" width="250" height="30" stroke="black" stroke-width="1" fill="white" pointer-events="all"/><text x="125" y="13" font-size="12" oryx:fittoelem="caption" oryx:align="middle center" oryx:anchors="top" fill="black" stroke="black">阶段</text></g></svg>',
      'icon': 'swimlane/pool.png',
      'groups': [
        '垂直泳道'
      ],
      'layout': [
        {
          'type': 'layout.bpmn2_0.pool'
        }
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'process_idpackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'canContainArtifacts',
        'all'
      ]
    },
    {
      'type': 'node',
      'id': 'V-Lane',
      'title': 'V-泳道',
      'description': 'A lane to stucture the process definition',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:oryx="http://www.b3mn.org/oryx" xmlns:xlink="http://www.w3.org/1999/xlink" width="250" height="600" version="1.0"><defs></defs><g pointer-events="none"><rect id="border_invisible" class="stripable-element-force" oryx:resize="vertical horizontal" x="0" y="0" width="250" height="600" fill="none" stroke-width="10" stroke="white" stroke-opacity="0.3" visibility="hidden" pointer-events="stroke"/><line class="left_dasharray_line" oryx:align="top left" oryx:resize="vertical horizontal" stroke-dasharray=\'10\' fill="none" stroke="#4694AE" x1="1" y1="40" x2="1" y2="600" stroke-width="1"/><rect id="caption" oryx:anchors="top left right" x="0" y="1" width="248" height="38" stroke="#A4BDD7" stroke-width="0" fill="#eff5f9" pointer-events="all"/><line class="right_boder" oryx:align="top right" oryx:anchors="top" oryx:resize="vertical horizontal" oryx:fittoelem="caption" visibility="hidden" fill="none" stroke="#4694AE" x1="250" y1="0" x2="248" y2="600" stroke-width="1"/><path class="left_jian" stroke="#4694AE" stroke-width="1" fill="none" d="M 1,0 L 6,20 L 1,40" oryx:anchors="top left" oryx:fittoelem="caption" /><text x="125" y="20" font-size="12" id="text_name" oryx:align="middle center" oryx:anchors="top" oryx:fittoelem="caption" fill="#333333"></text></g></svg>\n',
      'icon': 'swimlane/lane.png',
      'groups': [
        '垂直泳道'
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'V-PoolChild',
        'canContainArtifacts',
        'all'
      ]
    },
    {
      'type': 'edge',
      'id': 'SequenceFlow',
      'title': 'Sequence flow',
      'description': 'Sequence flow defines the execution order of activities.',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r\n<svg\r\n\txmlns="http://www.w3.org/2000/svg"\r\n\txmlns:oryx="http://www.b3mn.org/oryx"\r\n\tversion="1.0"\r\n\toryx:edge="edge" >\r\n\t<defs>\r\n\t  \t<marker id="start" refX="1" refY="5" markerUnits="userSpaceOnUse" markerWidth="17" markerHeight="11" orient="auto">\r\n\t  \t\t<!-- <path id="conditional"   d="M 0 6 L 8 1 L 15 5 L 8 9 L 1 5" fill="white" stroke="black" stroke-width="1" /> -->\r\n\t\t\t<path id="default" d="M 5 0 L 11 10" fill="white" stroke="#585858" stroke-width="1" />\r\n\t  \t</marker>\r\n\t  \t<marker id="end" refX="15" refY="6" markerUnits="userSpaceOnUse" markerWidth="15" markerHeight="12" orient="auto">\r\n\t  \t\t<path id="arrowhead" d="M 0 1 L 15 6 L 0 11z" fill="#585858" stroke="#585858" stroke-linejoin="round" stroke-width="2" />\r\n\t  \t</marker>\r\n\t</defs>\r\n\t<g id="edge">\r\n\t\t<path id="bg_frame" d="M10 50 L210 50" stroke="#585858" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" marker-start="url(#start)" marker-end="url(#end)" />\r\n\t\t<text id="text_name" x="0" y="0" oryx:edgePosition="startTop"/>\r\n\t</g>\r\n</svg>',
      'icon': 'connector/sequenceflow.png',
      'groups': [
        'Connecting Objects'
      ],
      'layout': [
        {
          'type': 'layout.bpmn2_0.sequenceflow'
        }
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'conditionsequenceflowpackage',
        'executionlistenerspackage',
        'defaultflowpackage',
        'skipexpressionpackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'ConnectingObjectsMorph',
        'all'
      ]
    },
    {
      'type': 'edge',
      'id': 'MessageFlow',
      'title': 'Message flow',
      'description': 'Message flow to connect elements in different pools.',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r\n<svg\r\n\txmlns="http://www.w3.org/2000/svg"\r\n\txmlns:oryx="http://www.b3mn.org/oryx"\r\n\tversion="1.0"\r\n\toryx:edge="edge" >\r\n\t<defs>\r\n\t\t<marker id="start" oryx:optional="yes" oryx:enabled="yes" refX="5" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto">\r\n\t  \t\t<!-- <path d="M 10 10 L 0 5 L 10 0" fill="none" stroke="#585858" /> -->\r\n\t  \t\t<circle id="arrowhead" cx="5" cy="5" r="5" fill="white" stroke="black" />\r\n\t  \t</marker>\r\n\r\n\t  \t<marker id="end" refX="10" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto">\r\n\t  \t\t<path id="arrowhead2" d="M 0 0 L 10 5 L 0 10 L 0 0" fill="white" stroke="#585858" />\r\n\t  \t</marker>\r\n\t</defs>\r\n\t<g id="edge">\r\n\t    <path id="bg_frame" d="M10 50 L210 50" stroke="#585858" fill="none" stroke-width="2" stroke-dasharray="3, 4" marker-start="url(#start)" marker-end="url(#end)" />\r\n\t\t<text id="text_name" x="0" y="0" oryx:edgePosition="midTop"/>\r\n\t</g>\r\n</svg>',
      'icon': 'connector/messageflow.png',
      'groups': [
        'Connecting Objects'
      ],
      'layout': [
        {
          'type': 'layout.bpmn2_0.sequenceflow'
        }
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'ConnectingObjectsMorph',
        'all'
      ]
    },
    {
      'type': 'edge',
      'id': 'Association',
      'title': 'Association',
      'description': 'Associates a text annotation with an element.',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r\n<svg\r\n\txmlns="http://www.w3.org/2000/svg"\r\n\txmlns:oryx="http://www.b3mn.org/oryx"\r\n\tversion="1.0"\r\n\toryx:edge="edge" >\r\n\t<g id="edge">\r\n\t    <path id="bg_frame" d="M10 50 L210 50" stroke="#585858" fill="none" stroke-width="2" stroke-dasharray="3, 4" />\r\n\t\t<text id="name" x="0" y="0" oryx:edgePosition="midTop" oryx:offsetTop="6" style="font-size:9px;"/>\r\n\t</g>\r\n</svg>',
      'icon': 'connector/association.undirected.png',
      'groups': [
        'Connecting Objects'
      ],
      'layout': [
        {
          'type': 'layout.bpmn2_0.sequenceflow'
        }
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'ConnectingObjectsMorph',
        'all'
      ]
    },
    {
      'type': 'edge',
      'id': 'DataAssociation',
      'title': 'DataAssociation',
      'description': 'Associates a data element with an activity.',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r\n<svg\r\n\txmlns="http://www.w3.org/2000/svg"\r\n\txmlns:oryx="http://www.b3mn.org/oryx"\r\n\tversion="1.0"\r\n\toryx:edge="edge" >\r\n\t<defs>\r\n\t  \t<marker id="end" refX="10" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto">\r\n\t  \t\t<path id="arrowhead" d="M 0 0 L 10 5 L 0 10" fill="none" stroke="#585858" />\r\n\t  \t</marker>\r\n\t</defs>\r\n\t<g id="edge">\r\n\t    <path id="bg_frame" d="M10 50 L210 50" stroke="#585858" fill="none" stroke-width="2" stroke-dasharray="3, 4" marker-end="url(#end)" />\r\n\t\t<text id="name" x="0" y="0" oryx:edgePosition="midTop" oryx:offsetTop="6" style="font-size:9px;"/>\r\n\t</g>\r\n</svg>',
      'icon': 'connector/association.unidirectional.png',
      'groups': [
        'Connecting Objects'
      ],
      'layout': [
        {
          'type': 'layout.bpmn2_0.sequenceflow'
        }
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'ConnectingObjectsMorph',
        'all'
      ]
    },
    {
      'type': 'node',
      'id': 'TextAnnotation',
      'title': '注释',
      'description': 'Annotates elements with description text.',
      'view': '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns:oryx="http://www.b3mn.org/oryx"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n   width="102"\n   height="51"\n   version="1.0">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx="2" oryx:cy="25" oryx:anchors="left" oryx:default="yes"/>\n  </oryx:magnets>\n  <g pointer-events="all" oryx:minimumSize="10 20" oryx:maximumSize="" >\n  <rect \n\tid="textannotationrect"\n\toryx:resize="vertical horizontal"\n\tx="1" \n\ty="1"\n\twidth="100"\n\theight="50"\n\tstroke="none"\n\tfill="none" />\n  <path \n  \tid = "frame"\n\td="M20,1 L1,1 L1,50 L20,50" \n\toryx:anchors="top bottom left" \n\tstroke="#585858" \n\tfill="none" \n\tstroke-width="1" />\n    \n    <text \n\t\tfont-size="12" \n\t\tid="text" \n\t\tx="5" \n\t\ty="25" \n\t\toryx:align="middle left"\n\t\toryx:fittoelem="textannotationrect"\n\t\toryx:anchors="left"\n\t\tstroke="#373e48">\n\t</text>\n  </g>\n</svg>',
      'icon': 'artifact/text.annotation.png',
      'groups': [
        '其他'
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage',
        'textpackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'all'
      ]
    },
    {
      'type': 'node',
      'id': 'DataStore',
      'title': 'Data store',
      'description': 'Reference to a data store.',
      'view': '<?xml version="1.0" encoding="utf-8" standalone="no" ?>\r\n<svg \r\n\txmlns="http://www.w3.org/2000/svg"\r\n\txmlns:svg="http://www.w3.org/2000/svg"\r\n   \txmlns:oryx="http://www.b3mn.org/oryx"\r\n   \txmlns:xlink="http://www.w3.org/1999/xlink"\r\n\t\r\n\twidth="63.001px" \r\n\theight="61.173px"\r\n\tversion="1.0">\r\n\t<defs></defs>\r\n\t<oryx:magnets>\r\n\t\t<oryx:magnet oryx:cx="0" oryx:cy="30.5865" oryx:anchors="left" />\r\n\t\t<oryx:magnet oryx:cx="31.5005" oryx:cy="61.173" oryx:anchors="bottom" />\r\n\t\t<oryx:magnet oryx:cx="63.001" oryx:cy="30.5865" oryx:anchors="right" />\r\n\t\t<oryx:magnet oryx:cx="31.5005" oryx:cy="0" oryx:anchors="top" />\r\n\t\t<oryx:magnet oryx:cx="31.5005" oryx:cy="30.5865" oryx:default="yes" />\r\n\t</oryx:magnets>\r\n\t\r\n\t<g>\r\n\t\t<defs>\r\n\t\t\t<radialGradient id="background" cx="30%" cy="30%" r="50%" fx="0%" fy="0%">\r\n\t\t\t\t<stop offset="0%" stop-color="#ffffff" stop-opacity="1"></stop>\r\n\t\t\t\t<stop offset="100%" stop-color="#ffffff" stop-opacity="1" id="fill_el"></stop>\r\n\t\t\t</radialGradient>\r\n\t\t</defs>\r\n\t\t\r\n\t\t<path id="bg_frame" fill="url(#background) #ffffff" stroke="#000000" d="M31.634,0.662c20.013,0,31.292,3.05,31.292,5.729c0,2.678,0,45.096,0,48.244\r\n\t\t\tc0,3.148-16.42,6.2-31.388,6.2c-14.968,0-30.613-2.955-30.613-6.298c0-3.342,0-45.728,0-48.05\r\n\t\t\tC0.925,4.165,11.622,0.662,31.634,0.662z"/>\r\n\t\t<path id="bg_frame2" fill="none" stroke="#000000" d="\r\n\t\t\tM62.926,15.69c0,1.986-3.62,6.551-31.267,6.551c-27.646,0-30.734-4.686-30.734-6.454 M0.925,11.137\r\n\t\t\tc0,1.769,3.088,6.455,30.734,6.455c27.647,0,31.267-4.565,31.267-6.551 M0.925,6.487c0,2.35,3.088,6.455,30.734,6.455\r\n\t\t\tc27.647,0,31.267-3.912,31.267-6.552 M62.926,6.391v4.844 M0.949,6.391v4.844 M62.926,11.041v4.844 M0.949,11.041v4.844"/>\r\n\t\t\t \t\r\n\t\t<text font-size="12" id="text_name" x="31" y="66" oryx:align="center top" stroke="black" />\r\n\t\t\t \r\n\t</g>\r\n</svg>\r\n',
      'icon': 'dataobject/data.store.png',
      'groups': [
        'Artifacts'
      ],
      'propertyPackages': [
        'overrideidpackage',
        'namepackage',
        'documentationpackage'
      ],
      'hiddenPropertyPackages': [],
      'roles': [
        'all'
      ]
    }
  ],
  'rules': {
    'cardinalityRules': [
      {
        'role': 'Startevents_all',
        'incomingEdges': [
          {
            'role': 'SequenceFlow',
            'maximum': 0
          }
        ]
      },
      {
        'role': 'Endevents_all',
        'outgoingEdges': [
          {
            'role': 'SequenceFlow',
            'maximum': 0
          }
        ]
      }
    ],
    'connectionRules': [
      {
        'role': 'SequenceFlow',
        'connects': [
          {
            'from': 'sequence_start',
            'to': [
              'sequence_end'
            ]
          }
        ]
      },
      {
        'role': 'Association',
        'connects': [
          {
            'from': 'sequence_start',
            'to': [
              'TextAnnotation'
            ]
          },
          {
            'from': 'sequence_end',
            'to': [
              'TextAnnotation'
            ]
          },
          {
            'from': 'TextAnnotation',
            'to': [
              'sequence_end'
            ]
          },
          {
            'from': 'BoundaryCompensationEvent',
            'to': [
              'sequence_end'
            ]
          },
          {
            'from': 'TextAnnotation',
            'to': [
              'sequence_start'
            ]
          },
          {
            'from': 'BoundaryCompensationEvent',
            'to': [
              'sequence_start'
            ]
          }
        ]
      },
      {
        'role': 'DataAssociation',
        'connects': [
          {
            'from': 'sequence_start',
            'to': [
              'DataStore'
            ]
          },
          {
            'from': 'sequence_end',
            'to': [
              'DataStore'
            ]
          },
          {
            'from': 'DataStore',
            'to': [
              'sequence_end'
            ]
          },
          {
            'from': 'DataStore',
            'to': [
              'sequence_start'
            ]
          }
        ]
      },
      {
        'role': 'IntermediateEventOnActivityBoundary',
        'connects': [
          {
            'from': 'Activity',
            'to': [
              'IntermediateEventOnActivityBoundary'
            ]
          }
        ]
      }
    ],
    'containmentRules': [
      {
        'role': 'BPMNDiagram',
        'contains': [
          'all'
        ]
      },
      {
        'role': 'SubProcess',
        'contains': [
          'sequence_start',
          'sequence_end',
          'from_task_event',
          'to_task_event',
          'EventSubProcess',
          'TextAnnotation',
          'DataStore'
        ]
      },
      {
        'role': 'AdhocSubProcess',
        'contains': [
          'sequence_start',
          'sequence_end',
          'from_task_event',
          'to_task_event',
          'TextAnnotation',
          'DataStore'
        ]
      },
      {
        'role': 'EventSubProcess',
        'contains': [
          'sequence_start',
          'sequence_end',
          'from_task_event',
          'to_task_event',
          'TextAnnotation',
          'DataStore'
        ]
      },
      {
        'role': 'Pool',
        'contains': [
          'Lane',
          'V-Lane'
        ]
      },
      {
        'role': 'V-Pool',
        'contains': [
          'V-Lane'
        ]
      },
      {
        'role': 'Lane',
        'contains': [
          'sequence_start',
          'sequence_end',
          'EventSubProcess',
          'TextAnnotation',
          'DataStore'
        ]
      },
      {
        'role': 'V-Lane',
        'contains': [
          'sequence_start',
          'sequence_end',
          'EventSubProcess',
          'TextAnnotation',
          'DataStore'
        ]
      }
    ],
    'morphingRules': [
      {
        'role': 'ActivitiesMorph',
        'baseMorphs': [
          'UserTask'
        ],
        'preserveBounds': true
      },
      {
        'role': 'GatewaysMorph',
        'baseMorphs': [
          'ExclusiveGateway'
        ]
      },
      {
        'role': 'StartEventsMorph',
        'baseMorphs': [
          'StartNoneEvent'
        ]
      },
      {
        'role': 'EndEventsMorph',
        'baseMorphs': [
          'StartNoneEvent'
        ]
      },
      {
        'role': 'CatchEventsMorph',
        'baseMorphs': [
          'CatchTimerEvent'
        ]
      },
      {
        'role': 'ThrowEventsMorph',
        'baseMorphs': [
          'ThrowNoneEvent'
        ]
      },
      {
        'role': 'BoundaryEventsMorph',
        'baseMorphs': [
          'ThrowNoneEvent'
        ]
      },
      {
        'role': 'BoundaryCompensationEvent',
        'baseMorphs': [
          'BoundaryCompensationEvent'
        ]
      },
      {
        'role': 'TextAnnotation',
        'baseMorphs': [
          'TextAnnotation'
        ]
      },
      {
        'role': 'DataStore',
        'baseMorphs': [
          'DataStore'
        ]
      }
    ]
  }
}
