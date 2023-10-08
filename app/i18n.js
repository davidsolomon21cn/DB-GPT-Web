'use client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Knowledge_Space: 'Knowledge',
      space: 'space',
      Vector: 'Vector',
      Owner: 'Owner',
      Docs: 'Count',
      Knowledge_Space_Config: 'Knowledge Space Config',
      Choose_a_Datasource_type: 'Choose a Datasource type',
      Setup_the_Datasource: 'Setup the Datasource',
      Knowledge_Space_Name: 'Knowledge Space Name',
      Please_input_the_name: 'Please input the name',
      Please_input_the_owner: 'Please input the owner',
      Description: 'Description',
      Please_input_the_description: 'Please input the description',
      Next: 'Next',
      the_name_can_only_contain: 'the name can only contain numbers, letters, Chinese characters, "-" and "_"',
      Text: 'Text',
      'Fill your raw text': 'Fill your raw text',
      URL: 'URL',
      Fetch_the_content_of_a_URL: 'Fetch the content of a URL',
      Document: 'Document',
      Upload_a_document: 'Upload a document, document type can be PDF, CSV, Text, PowerPoint, Word, Markdown',
      Name: 'Name',
      Text_Source: 'Text Source(Optional)',
      Please_input_the_text_source: 'Please input the text source',
      Synch: 'Synch',
      Back: 'Back',
      Finish: 'Finish',
      Web_Page_URL: 'Web Page URL',
      Please_input_the_Web_Page_URL: 'Please input the Web Page URL',
      Select_or_Drop_file: 'Select or Drop file',
      Documents: 'Documents',
      Chat: 'Chat',
      Add_Datasource: 'Add Datasource',
      Arguments: 'Arguments',
      Type: 'Type',
      Size: 'Size',
      Last_Synch: 'Last Synch',
      Status: 'Status',
      Result: 'Result',
      Details: 'Details',
      Delete: 'Delete',
      Operation: 'Operation',
      Submit: 'Submit',
      Chunks: 'Chunks',
      Content: 'Content',
      Meta_Data: 'Meta Data',
      Please_select_a_file: 'Please select a file',
      Please_input_the_text: 'Please input the text',
      Embedding: 'Embedding',
      topk: 'topk',
      the_top_k_vectors: 'the top k vectors based on similarity score',
      recall_score: 'recall_score',
      Set_a_threshold_score: 'Set a threshold score for the retrieval of similar vectors',
      recall_type: 'recall_type',
      Recall_Type: 'recall type',
      model: 'model',
      A_model_used: 'A model used to create vector representations of text or other data',
      chunk_size: 'chunk_size',
      The_size_of_the_data_chunks: 'The size of the data chunks used in processing',
      chunk_overlap: 'chunk_overlap',
      The_amount_of_overlap: 'The amount of overlap between adjacent data chunks',
      Prompt: 'Prompt',
      scene: 'scene',
      A_contextual_parameter: 'A contextual parameter used to define the setting or environment in which the prompt is being used',
      template: 'template',
      structure_or_format:
        'A pre-defined structure or format for the prompt, which can help ensure that the AI system generates responses that are consistent with the desired style or tone.',
      max_token: 'max_token',
      The_maximum_number_of_tokens: 'The maximum number of tokens or words allowed in a prompt',
      Theme: 'Theme',
      Port: 'Port',
      Username: 'Username',
      Password: 'Password',
      Remark: 'Remark',
      Edit: 'Edit',
      Database: 'Database',
      Data_Source: 'Data Center',
      Close_Sidebar: 'Fold',
      language: 'Language',
      choose_model: 'Please choose a model',
      data_center_desc: 'DB-GPT also offers a user-friendly data center management interface for efficient data maintenance.',
      create_database: 'Create Database',
      create_knowledge: 'Create Knowledge',
      path: 'Path',
      model_manage: 'Models',
      stop_model_success: 'Stop model success',
      create_model: 'Create Model',
      model_select_tips: 'Please select a model',
      submit: 'Submit',
      start_model_success: 'Start model success',
      download_model_tip: 'Please download model first.',
    },
  },
  zh: {
    translation: {
      Knowledge_Space: '知识库',
      space: '知识库',
      Vector: '向量',
      Owner: '创建人',
      Docs: '文档数',
      Knowledge_Space_Config: '知识库配置',
      Choose_a_Datasource_type: '选择数据源类型',
      Setup_the_Datasource: '设置数据源',
      Knowledge_Space_Name: '知识库名称',
      Please_input_the_name: '请输入名称',
      Please_input_the_owner: '请输入创建人',
      Description: '描述',
      Please_input_the_description: '请输入描述',
      Next: '下一步',
      the_name_can_only_contain: '名称只能包含数字、字母、中文字符、-或_',
      Text: '文本',
      'Fill your raw text': '填写您的原始文本',
      URL: '网址',
      Fetch_the_content_of_a_URL: '获取 URL 的内容',
      Document: '文档',
      Upload_a_document: '上传文档，文档类型可以是PDF、CSV、Text、PowerPoint、Word、Markdown',
      Name: '名称',
      Text_Source: '文本来源（可选）',
      Please_input_the_text_source: '请输入文本来源',
      Synch: '同步',
      Back: '上一步',
      Finish: '完成',
      Web_Page_URL: '网页网址',
      Please_input_the_Web_Page_URL: '请输入网页网址',
      Select_or_Drop_file: '选择或拖拽文件',
      Documents: '文档',
      Chat: '对话',
      Add_Datasource: '添加数据源',
      Arguments: '参数',
      Type: '类型',
      Size: '切片',
      Last_Synch: '上次同步时间',
      Status: '状态',
      Result: '结果',
      Details: '明细',
      Delete: '删除',
      Operation: '操作',
      Submit: '提交',
      Chunks: '切片',
      Content: '内容',
      Meta_Data: '元数据',
      Please_select_a_file: '请上传一个文件',
      Please_input_the_text: '请输入文本',
      Embedding: '嵌入',
      topk: '球',
      the_top_k_vectors: '基于相似度得分的前 k 个向量',
      recall_score: '召回分数',
      Set_a_threshold_score: '设置相似向量检索的阈值分数',
      recall_type: '回忆类型',
      Recall_Type: '回忆类型',
      model: '模型',
      A_model_used: '用于创建文本或其他数据的矢量表示的模型',
      chunk_size: '块大小',
      The_size_of_the_data_chunks: '处理中使用的数据块的大小',
      chunk_overlap: '块重叠',
      The_amount_of_overlap: '相邻数据块之间的重叠量',
      Prompt: '迅速的',
      scene: '场景',
      A_contextual_parameter: '用于定义使用提示的设置或环境的上下文参数',
      template: '模板',
      structure_or_format: '预定义的提示结构或格式，有助于确保人工智能系统生成与所需风格或语气一致的响应。',
      max_token: '最大令牌',
      The_maximum_number_of_tokens: '提示中允许的最大标记或单词数',
      Theme: '主题',
      Port: '端口',
      Username: '用户名',
      Password: '密码',
      Remark: '备注',
      Edit: '编辑',
      Database: '数据库',
      Data_Source: '数据中心',
      Close_Sidebar: '收起',
      language: '语言',
      choose_model: '请选择一个模型',
      data_center_desc: 'DB-GPT支持数据库交互和基于文档的对话，它还提供了一个用户友好的数据中心管理界面。',
      create_database: '创建数据库',
      create_knowledge: '创建知识库',
      path: '路径',
      model_manage: '模型管理',
      stop_model_success: '模型停止成功',
      create_model: '创建模型',
      model_select_tips: '请选择一个模型',
      submit: '提交',
      start_model_success: '启动模型成功',
      download_model_tip: '请先下载模型！',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
