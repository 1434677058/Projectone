const descriptions = {
  1: "从微博、知乎、抖音等平台按关键词抓取评论/帖子，形成原始语料库。",
  2: "对文本进行清洗、去重、分词、停用词过滤，为后续建模提供高质量数据。",
  3: "通过LDA或聚类方法识别讨论焦点，提炼热点事件中的主要议题。",
  4: "利用情感分类模型识别正向、中性、负向情绪，并计算整体情感倾向。",
  5: "以图表与仪表盘展示情绪占比、趋势变化与主题词，支撑结论输出。"
};

const stepDescription = document.getElementById("stepDescription");
const progressLabel = document.getElementById("progressLabel");
const taskStatus = document.getElementById("taskStatus");
const steps = document.querySelectorAll(".step");

steps.forEach((stepButton) => {
  stepButton.addEventListener("click", () => {
    steps.forEach((button) => button.classList.remove("active"));
    stepButton.classList.add("active");

    const currentStep = stepButton.dataset.step;
    stepDescription.textContent = descriptions[currentStep];
    progressLabel.textContent = `已查看：第 ${currentStep} 步`;
  });
});

const eventForm = document.getElementById("eventForm");

eventForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const keyword = document.getElementById("keyword").value.trim();
  const source = document.getElementById("source").value;
  const timeRange = document.getElementById("timeRange").value.trim();

  if (!keyword || !timeRange) {
    taskStatus.textContent = "配置不完整";
    return;
  }

  taskStatus.textContent = "任务已生成";
  progressLabel.textContent = `已配置：${source} · ${timeRange}`;
  stepDescription.textContent = `当前事件「${keyword}」已进入分析队列，可逐步查看各模块说明。`;
});

const startDemo = document.getElementById("startDemo");
startDemo.addEventListener("click", () => {
  taskStatus.textContent = "演示运行中";
  progressLabel.textContent = "执行中：数据爬取 -> 预处理";
  stepDescription.textContent = "系统正在模拟采集与清洗数据，下一步可点击流程节点查看详情。";
});

const viewPipeline = document.getElementById("viewPipeline");
viewPipeline.addEventListener("click", () => {
  document.getElementById("pipeline").scrollIntoView({ behavior: "smooth", block: "center" });
});
