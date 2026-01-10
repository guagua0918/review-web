const questionData = [
  {
    "subject": "OS - Ch1 System Type",
    "term": "Multiprogramming (多程式規劃)",
    "definition": "Memory 中同時載入多個 Jobs，當某 Job 進行 I/O 時，CPU 切換執行另一個 Job。",
    "exam_point": "目的：提高 CPU utilization，避免 CPU 閒置。"
  },
  {
    "subject": "OS - Ch1 System Type",
    "term": "Time-sharing (分時系統)",
    "definition": "Multiprogramming 的一種，CPU 切換頻率極高，強調短 Response time。",
    "exam_point": "特徵：使用 Virtual Memory，讓每個 User 感覺有專屬電腦。"
  },
  {
    "subject": "OS - Ch1 System Type",
    "term": "Multiprocessors (多處理器系統)",
    "definition": "Tightly-Coupled System，共享 Memory、Bus、Clock 與 I/O devices。",
    "exam_point": "優點：增加產能 (Throughput)、經濟規模 (省成本)、增加可靠度 (Graceful Degradation)。"
  },
  {
    "subject": "OS - Ch1 System Type",
    "term": "SMP (Symmetric Multi-Processing)",
    "definition": "對稱式多處理，每個 CPU 平權，能力相同。",
    "exam_point": "缺點：OS 開發較複雜，需考量 Resource 競爭問題。"
  },
  {
    "subject": "OS - Ch1 System Type",
    "term": "ASMP (Asymmetric Multi-Processing)",
    "definition": "非對稱式多處理，採 Master-Slave 架構，由 Master 分派工作。",
    "exam_point": "缺點：可靠度較差，若 Master 故障則系統停頓。"
  },
  {
    "subject": "OS - Ch1 System Type",
    "term": "Distributed System (分散式系統)",
    "definition": "Loosely-Coupled System，多台機器透過 Network 串連，各 CPU 有 Local Memory。",
    "exam_point": "溝通方式：Message Passing (因為沒有共享記憶體)。"
  },
  {
    "subject": "OS - Ch1 System Type",
    "term": "Hard Real-time System",
    "definition": "必須嚴格在 Deadline 前完成任務 (如核能控制)。",
    "exam_point": "限制：OS 不可有過長 Latency，通常不支援 Virtual Memory。"
  },
  {
    "subject": "OS - Ch1 System Type",
    "term": "Soft Real-time System",
    "definition": "確保 Real-time process 優先權高於 Non-real-time process。",
    "exam_point": "應用：多媒體系統 (Multimedia Systems)。"
  },
  {
    "subject": "OS - Ch1 System Type",
    "term": "Mobile Computing",
    "definition": "在行動裝置上運行的運算環境。",
    "exam_point": "主要限制：Screen size (螢幕大小)、Power (電源)、Memory (記憶體)。"
  },
  {
    "subject": "OS - Ch2 I/O Structure",
    "term": "Polling I/O (Busy-Waiting)",
    "definition": "CPU 不斷詢問 Device Controller 的 Status bit 直到 Ready。",
    "exam_point": "缺點：浪費 CPU time 在 Polling 迴圈上。"
  },
  {
    "subject": "OS - Ch2 I/O Structure",
    "term": "Interrupt I/O (中斷式)",
    "definition": "CPU 發出 I/O 命令後切換執行其他 Process，I/O 完成時 Controller 發出 Interrupt 通知。",
    "exam_point": "優點：CPU 與 I/O 裝置可以並行運作 (Overlap)。"
  },
  {
    "subject": "OS - Ch2 I/O Structure",
    "term": "ISR (Interrupt Service Routine)",
    "definition": "負責處理特定中斷的程式碼片段。",
    "exam_point": "機制：透過 Interrupt Vector 查找對應的 ISR 位址並執行。"
  },
  {
    "subject": "OS - Ch2 I/O Structure",
    "term": "External Interrupt",
    "definition": "來自 CPU 外部硬體的中斷訊號。",
    "exam_point": "例子：I/O complete (I/O 完成)、I/O error (I/O 錯誤)。"
  },
  {
    "subject": "OS - Ch2 I/O Structure",
    "term": "Internal Interrupt (Exception/Trap)",
    "definition": "程式執行過程中產生的異常或錯誤。",
    "exam_point": "例子：Divide-by-zero (除以零)、Illegal memory access (非法記憶體存取)。"
  },
  {
    "subject": "OS - Ch2 I/O Structure",
    "term": "Software Interrupt",
    "definition": "由 User program 主動發出的中斷。",
    "exam_point": "用途：System Call (請求 OS 服務)。"
  },
  {
    "subject": "OS - Ch2 I/O Structure",
    "term": "DMA (Direct Memory Access)",
    "definition": "由 DMA Controller 負責 Device 與 Memory 間的資料傳輸，不需 CPU 介入。",
    "exam_point": "適用情境：High-speed block-transfer devices (如硬碟)。"
  },
  {
    "subject": "OS - Ch2 I/O Structure",
    "term": "Cycle Stealing",
    "definition": "DMA 運作時會佔用 Memory Bus。",
    "exam_point": "影響：CPU 暫時無法存取 Memory (但仍可執行 Cache 中的指令)。"
  },
  {
    "subject": "OS - Ch2 I/O Structure",
    "term": "Dual Mode Operation",
    "definition": "將系統分為 User Mode (Bit 1) 與 Kernel Mode (Bit 0)。",
    "exam_point": "目的：保護系統，防止 User program 執行特權指令導致崩潰。"
  },
  {
    "subject": "OS - Ch2 I/O Structure",
    "term": "System Call (系統呼叫)",
    "definition": "User process 請求 Kernel 服務的介面。",
    "exam_point": "運作：透過 Trap (Software Interrupt) 將模式由 User mode 切換至 Kernel mode。"
  },
  {
    "subject": "OS - Ch2 I/O Structure",
    "term": "I/O Protection",
    "definition": "防止使用者直接控制 I/O 裝置。",
    "exam_point": "實作：將所有 I/O 指令定義為特權指令 (Privileged Instruction)。"
  },
  {
    "subject": "OS - Ch2 I/O Structure",
    "term": "Memory Protection",
    "definition": "限制 Process 只能存取屬於自己的記憶體範圍。",
    "exam_point": "硬體支援：Base Register (起始位址) 和 Limit Register (大小)。"
  },
  {
    "subject": "OS - Ch2 I/O Structure",
    "term": "CPU Protection",
    "definition": "防止單一 Process 無限期佔用 CPU。",
    "exam_point": "硬體支援：Timer (計時器)，時間到會發出 Time-out interrupt。"
  },
  {
    "subject": "OS - Ch3 System Structure",
    "term": "System Call Parameter Passing",
    "definition": "傳遞參數給 System Call 的方法。",
    "exam_point": "方式：Registers (最快)、Block/Table (傳位址)、Stack (Push/Pop)。"
  },
  {
    "subject": "OS - Ch3 System Structure",
    "term": "Layered Approach (分層架構)",
    "definition": "將 OS 功能由上而下分層，上層只能呼叫下層功能。",
    "exam_point": "優點：易於除錯 (Debugging) 與驗證 (Verification)。"
  },
  {
    "subject": "OS - Ch3 System Structure",
    "term": "Microkernel (微核心)",
    "definition": "將非必要服務移至 User space，Kernel 只保留最基本功能 (IPC, Memory, Scheduling)。",
    "exam_point": "優缺點：易擴充、高可靠度；但因頻繁 Context Switch 導致效能較差。"
  },
  {
    "subject": "OS - Ch3 System Structure",
    "term": "Modular (模組化結構)",
    "definition": "使用 Loadable Kernel Modules (LKMs)，Kernel 執行時可動態載入模組。",
    "exam_point": "實例：Linux、Solaris 採用此架構。"
  },
  {
    "subject": "OS - Ch3 System Structure",
    "term": "Hypervisor (VMM)",
    "definition": "建立與管理 Virtual Machines 的軟體層。",
    "exam_point": "優點：安全性 (Sandbox)、可同時執行多個 OS、開發測試便利。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Process (行程)",
    "definition": "執行中的程式 (Program in execution)。",
    "exam_point": "Memory Layout：Text (Code), Data (Global vars), Heap (Dynamic), Stack (Local vars)。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "PCB (Process Control Block)",
    "definition": "OS 用來紀錄 Process 資訊的資料結構。",
    "exam_point": "內容：Process State, PC, Registers, Scheduling info, Memory info。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Process State: Ready",
    "definition": "Process 已載入 Memory，正在等待 CPU 分派。",
    "exam_point": "轉換：經由 Short-term Scheduler 選中變成 Running。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Process State: Waiting (Blocked)",
    "definition": "Process 正在等待 I/O 完成或特定 Event 發生。",
    "exam_point": "特徵：即使 CPU 空閒，此狀態的 Process 也無法執行。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Context Switch (本文切換)",
    "definition": "CPU 從一個 Process 切換到另一個 Process，需保存舊 State 並載入新 State。",
    "exam_point": "性質：Context switch 時間是純粹的 System Overhead (不做有用功)。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Long-term Scheduler (Job Scheduler)",
    "definition": "決定哪些 Job 從 Disk 載入 Memory。",
    "exam_point": "功能：控制 Multiprogramming degree (記憶體中的 Process 數量)。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Short-term Scheduler (CPU Scheduler)",
    "definition": "決定哪個 Ready process 取得 CPU。",
    "exam_point": "特徵：執行頻率最高，需非常快速。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Medium-term Scheduler",
    "definition": "負責 Process 的 Swap in/out。",
    "exam_point": "目的：調節 Memory 使用量，釋放記憶體空間。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "fork()",
    "definition": "建立 Child Process 的 System Call。",
    "exam_point": "回傳值：Parent 收到 Child PID (>0)，Child 收到 0。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Zombie Process",
    "definition": "Child Process 已執行結束，但 Parent 尚未呼叫 wait()。",
    "exam_point": "狀態：Child 的 PCB 仍佔用系統 Process Table 的空間。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Orphan Process",
    "definition": "Parent Process 已結束，但 Child Process 仍在執行。",
    "exam_point": "處理：通常由 init 或 systemd 接管。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Thread (執行緒)",
    "definition": "CPU 分配的基本單位 (LWP)，同一 Process 下的 Threads 共享資源。",
    "exam_point": "共享：Code, Data, OS resources；私有：PC, Registers, Stack。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "User Thread",
    "definition": "在 User Space 管理的 Thread，Kernel 不知道其存在。",
    "exam_point": "缺點：其中一個 Thread 呼叫 System Call 被 Block，整個 Process 都會被 Block。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Kernel Thread",
    "definition": "由 OS 核心直接管理的 Thread。",
    "exam_point": "優點：並行性較好；缺點：建立與切換成本比 User Thread 高。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "CPU Utilization",
    "definition": "CPU 忙碌的時間比例。",
    "exam_point": "排程目標：越高越好 (Maximize)。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Turnaround Time",
    "definition": "Process 從提交 (New) 到完成 (Terminated) 的總時間。",
    "exam_point": "排程目標：越短越好 (Minimize)。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "FCFS (First-Come, First-Served)",
    "definition": "依照抵達順序排程，Non-preemptive。",
    "exam_point": "缺點：Convoy Effect (大 Process 擋在前面，導致平均等待時間變長)。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "SJF (Shortest-Job-First)",
    "definition": "選擇 CPU Burst Time 最短的 Process 優先執行。",
    "exam_point": "特性：具有最小的 Average Waiting Time (Optimal)。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Aging (老化技術)",
    "definition": "隨著等待時間增加，逐漸提高 Process 的優先權。",
    "exam_point": "目的：解決 Priority Scheduling 中的 Starvation 問題。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "RR (Round Robin)",
    "definition": "專為分時系統設計，每個 Process 分配固定的 Time Quantum (q)。",
    "exam_point": "Trade-off：q 太大變 FCFS，q 太小導致 Context Switch Overhead 過高。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Multilevel Feedback Queue (MFQS)",
    "definition": "允許多個 Queue，且 Process 可以在 Queue 之間移動。",
    "exam_point": "優點：最具彈性的排程演算法，可避免 Starvation。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Priority Inversion",
    "definition": "低優先權 Process 佔用 Shared Resource，導致高優先權 Process 被迫等待。",
    "exam_point": "解法：Priority Inheritance (低優先權繼承高優先權的等級)。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "EDF (Earliest Deadline First)",
    "definition": "Real-time 排程演算法，Deadline 越近的優先權越高。",
    "exam_point": "特性：Dynamic Priority，理論上可達 100% CPU utilization。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Soft Real-time System",
    "definition": "確保 Real-time process 優先權高於 Non-real-time process 的系統。",
    "exam_point": "特徵：必須支援 Preemptive Priority 排班，且不提供 'Aging' 技術 (避免高優先權被降級)。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Priority Inversion (優先權反轉)",
    "definition": "低優先權 Process 持有資源，導致高優先權 Process 等待，卻被中優先權 Process 搶佔 CPU。",
    "exam_point": "後果：高優先權 Process 被迫等待更久，違反排程預期。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Priority Inheritance (優先權繼承)",
    "definition": "解決 Priority Inversion 的方法。",
    "exam_point": "作法：讓持有資源的低優先權 Process 暫時繼承等待中高優先權 Process 的等級。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Thread (執行緒)",
    "definition": "輕量級 Process (Lightweight Process)，CPU 分配的基本單位。",
    "exam_point": "結構：包含 Thread ID, Program Counter, Register set, Stack。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Thread Shared Resources (共享資源)",
    "definition": "同一 Process 內所有 Threads 共享的部分。",
    "exam_point": "包含：Code section, Data section (Global variables), OS resources (Open files, Signals)。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Thread Private Resources (私有資源)",
    "definition": "每個 Thread 獨自擁有的部分。",
    "exam_point": "包含：Thread ID, Program Counter (PC), Register set, Stack。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Thread Benefits: Responsiveness",
    "definition": "執行緒帶來的回應性優點。",
    "exam_point": "說明：若程式中部分執行緒被 Blocked (如 I/O)，其他部分仍可繼續執行 (如 UI 回應)。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Thread Benefits: Economy",
    "definition": "執行緒在經濟方面的優點。",
    "exam_point": "比較：建立 Thread 與 Context Switch 的成本比 Process 低很多。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Many-to-One Model",
    "definition": "多個 User threads 對應一個 Kernel thread。",
    "exam_point": "缺點：一個 Thread 呼叫 System Call 被 block，會導致整個 Process block；無法利用多核平行。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "One-to-One Model",
    "definition": "每個 User thread 對應一個 Kernel thread (如 Linux, Windows)。",
    "exam_point": "優缺點：並行性 (Concurrency) 高，但建立 Kernel thread 成本較高，需限制數量。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Many-to-Many Model",
    "definition": "多個 User threads 對應到相同或較少數量的 Kernel threads。",
    "exam_point": "特徵：兼具彈性與效能，解除了前兩種模型的限制。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "fork() in Multithreading",
    "definition": "多執行緒環境下的 fork 行為。",
    "exam_point": "議題：若 fork 後立即 exec，只需複製 Calling thread；否則可能需複製所有 Threads。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "Thread Pools",
    "definition": "預先建立一組 Threads 等待工作指派的機制。",
    "exam_point": "優點：避免頻繁建立/銷毀 Thread 的成本，並能控制系統中併發的 Thread 數量。"
  },
  {
    "subject": "OS - Ch4 Process Management",
    "term": "TLS (Thread Local Storage)",
    "definition": "允許每個 Thread 擁有自己的 Global variable 副本的機制。",
    "exam_point": "用途：在不需要傳遞參數的情況下，讓各 Thread 保有獨立數據。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Deadlock Definition",
    "definition": "一組 Processes 互相等待對方持有的資源。",
    "exam_point": "結果：導致所有涉及的 Process 都無法繼續執行。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Condition: Mutual Exclusion",
    "definition": "Deadlock 必要條件之一：互斥。",
    "exam_point": "內容：資源一次只能被一個 Process 使用 (Non-sharable)。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Condition: Hold and Wait",
    "definition": "Deadlock 必要條件之一：持有並等待。",
    "exam_point": "內容：Process 持有部分資源，並同時等待其他被佔用的資源。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Condition: No Preemption",
    "definition": "Deadlock 必要條件之一：不可搶奪。",
    "exam_point": "內容：資源不能被強行搶走，只能由持有者完成任務後自願釋放。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Condition: Circular Wait",
    "definition": "Deadlock 必要條件之一：循環等待。",
    "exam_point": "內容：存在一個等待環狀鏈 (P0 等 P1 ... Pn 等 P0)。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "RAG (Resource Allocation Graph)",
    "definition": "用圖形表示資源分配狀況，用於判斷 Deadlock。",
    "exam_point": "判斷：若圖中無 Cycle 則保證無 Deadlock；若有 Cycle 且資源為 Single Instance 則必有 Deadlock。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Deadlock Prevention (預防)",
    "definition": "透過破壞 Deadlock 四個必要條件之一來防止發生。",
    "exam_point": "代價：通常會導致 Device utilization 降低或 Throughput 下降。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Prevention: Hold and Wait",
    "definition": "破壞「持有並等待」條件的方法。",
    "exam_point": "作法：要求 Process 在執行前一次申請並取得所有資源。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Prevention: Circular Wait",
    "definition": "破壞「循環等待」條件的方法。",
    "exam_point": "作法：Resource Ordering (對資源編號，規定只能依序號遞增申請)。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Deadlock Avoidance (避免)",
    "definition": "動態檢查資源分配狀態，確保系統處於 Safe State。",
    "exam_point": "先決條件：需預先知道 Process 的 Max Claim (最大資源需求)。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Safe State",
    "definition": "系統能找到一組 Safe Sequence 讓所有 Process 依序完成。",
    "exam_point": "關係：Unsafe state 不一定代表 Deadlock，但 Deadlock 一定屬於 Unsafe state。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Banker's Algorithm",
    "definition": "用於多重實例 (Multi-instance) 資源的 Deadlock Avoidance 演算法。",
    "exam_point": "核心邏輯：當 Process 請求資源時，試算分配後是否仍處於 Safe State，是才分配。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Banker's Algorithm Structures",
    "definition": "演算法使用的資料結構：Available, Max, Allocation, Need。",
    "exam_point": "關鍵公式：Need (還需要的) = Max (最大需求) - Allocation (已分配)。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Deadlock Detection",
    "definition": "允許 Deadlock 發生，再透過演算法偵測並進行恢復。",
    "exam_point": "工具：Wait-for Graph (針對 Single Instance 資源) 或類似 Banker's 的演算法。"
  },
  {
    "subject": "OS - Ch5 Deadlock",
    "term": "Recovery: Resource Preemption",
    "definition": "選擇 Victim (犧牲者) 搶走資源以解開 Deadlock。",
    "exam_point": "需考慮問題：Rollback (回滾狀態) 與 Starvation (避免同一 Process 一直被犧牲)。"
  },
  {
    "subject": "OS - Ch6 Synchronization",
    "term": "Race Condition (競爭情況)",
    "definition": "多個 Processes 同時存取共享資料，結果取決於執行順序。",
    "exam_point": "後果：導致資料不一致 (Data Inconsistency)。"
  },
  {
    "subject": "OS - Ch6 Synchronization",
    "term": "Critical Section (CS)",
    "definition": "存取共享資源的程式碼片段。",
    "exam_point": "目標：確保在 CS 內的執行具有互斥性。"
  },
  {
    "subject": "OS - Ch6 Synchronization",
    "term": "CS Requirement: Mutual Exclusion",
    "definition": "CS 設計三要求之一：互斥。",
    "exam_point": "內容：同一時間最多只有一個 Process 能在 Critical Section 內執行。"
  },
  {
    "subject": "OS - Ch6 Synchronization",
    "term": "CS Requirement: Progress",
    "definition": "CS 設計三要求之一：進行。",
    "exam_point": "內容：不在 CS 內的 Process 不可阻礙別人進入；進入 CS 的決策不能無限延遲。"
  },
  {
    "subject": "OS - Ch6 Synchronization",
    "term": "CS Requirement: Bounded Waiting",
    "definition": "CS 設計三要求之一：有限等待。",
    "exam_point": "內容：Process 提出申請後，等待進入 CS 的次數必須有限制 (避免 Starvation)。"
  },
  {
    "subject": "OS - Ch6 Synchronization",
    "term": "Peterson's Solution",
    "definition": "純軟體的同步解決方案，適用於 2 個 Processes。",
    "exam_point": "變數：使用 turn (輪到誰) 和 flag (誰想進) 來達成互斥。"
  },
  {
    "subject": "OS - Ch6 Synchronization",
    "term": "Atomic Instructions",
    "definition": "硬體支援的同步指令，如 Test-and-Set, Compare-and-Swap。",
    "exam_point": "特性：保證指令執行過程不可被中斷 (Indivisible)。"
  },
  {
    "subject": "OS - Ch6 Synchronization",
    "term": "Mutex Locks",
    "definition": "OS 提供的同步工具，Boolean lock。",
    "exam_point": "實作：acquire() 取得鎖，release() 釋放鎖，通常使用 Spinlock (Busy waiting)。"
  },
  {
    "subject": "OS - Ch6 Synchronization",
    "term": "Semaphore (號誌)",
    "definition": "整數變數 S，透過 atomic 操作 wait() 和 signal() 存取。",
    "exam_point": "操作：wait(S) (S<=0 則等待，否則 S--)；signal(S) (S++，若有等待者則喚醒)。"
  },
  {
    "subject": "OS - Ch6 Synchronization",
    "term": "Bounded-Buffer Problem",
    "definition": "經典同步問題 (Producer-Consumer)。",
    "exam_point": "解法：使用 Mutex 保護 Buffer 操作，使用 Full 與 Empty Semaphores 同步生產與消費。"
  },
  {
    "subject": "OS - Ch6 Synchronization",
    "term": "Readers-Writers Problem",
    "definition": "多個 Readers 可同時讀，但 Writer 須獨佔。",
    "exam_point": "難點：需在 Reader preference (Writer 可能 Starvation) 與 Writer preference 間取捨。"
  },
  {
    "subject": "OS - Ch6 Synchronization",
    "term": "Dining Philosophers Problem",
    "definition": "哲學家用餐問題，主要探討 Deadlock 與 Starvation。",
    "exam_point": "解法：避免 Circular Wait (例如規定奇數號先拿左筷，偶數號先拿右筷)。"
  },
  {
    "subject": "OS - Ch6 Synchronization",
    "term": "Monitor (管程)",
    "definition": "高階同步機制 (ADT)，保證同一時間只有一個 Process 在 Monitor 內。",
    "exam_point": "機制：使用 Condition Variables (x.wait, x.signal) 處理同步。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Logical Address (Virtual Address)",
    "definition": "由 CPU 產生的位址。",
    "exam_point": "對應：User program 看到的都是邏輯位址。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Physical Address",
    "definition": "Memory Unit (RAM) 實際看到的位址。",
    "exam_point": "轉換：需透過 MMU 將 Logical Address 轉換而來。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "MMU (Memory Management Unit)",
    "definition": "負責 Run-time Address Mapping 的硬體裝置。",
    "exam_point": "功能：將 CPU 發出的 Logical Address 加上 Relocation Register 轉為 Physical Address。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Address Binding: Execution Time",
    "definition": "程式執行當下才決定實體位址。",
    "exam_point": "必要性：若 Process 在執行期間可能會在 Memory 中移動，必須採此方式 (需硬體支援)。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Dynamic Loading",
    "definition": "程式執行時，呼叫到該 Routine 才載入 Memory。",
    "exam_point": "優點：節省記憶體空間，特別是對於少用的 Error handling routine。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Dynamic Linking",
    "definition": "將 Linking 延後到執行時期，通常用於 Shared Libraries。",
    "exam_point": "優點：多個 Processes 可共享 Library (如 .dll) 的單一副本，大幅節省記憶體。"
  },
  {
    "subject": "OS - Ch6 Synchronization",
    "term": "Spinlock",
    "definition": "Process 在等待鎖時進行 Busy Waiting (迴圈檢查)。",
    "exam_point": "適用性：適用於多核系統且預期鎖持有時間很短的情況 (避免 Context Switch)。"
  },
  {
    "subject": "OS - Ch6 Synchronization",
    "term": "Counting Semaphore",
    "definition": "整數值範圍不受限的 Semaphore。",
    "exam_point": "用途：用來控制有限數量的資源實例 (Resource instances)。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "TLB (Translation Look-Aside Buffer)",
    "definition": "一種快速查找的硬體 Cache，儲存常用的 Page No 與 Frame No 對應。",
    "exam_point": "目的：加速邏輯位址到實體位址的轉換，減少存取記憶體的次數。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "TLB Hit/Miss",
    "definition": "TLB 查找成功與失敗的情況。",
    "exam_point": "影響：若 TLB Miss，CPU 需多一次 Memory Access 去讀取 Page Table，導致 EMAT 顯著增加。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "ASID (Address-Space Identifier)",
    "definition": "TLB 中的 Process ID 欄位，用來區分不同 Process 的紀錄。",
    "exam_point": "優點：允許 TLB 同時儲存多個 Process 的 Entry，減少 Context Switch 時需 Flush TLB 的動作。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "TLB Reach",
    "definition": "TLB 能覆蓋的記憶體範圍 (TLB Entries × Page Size)。",
    "exam_point": "策略：增加 Page Size 可以有效增加 TLB Reach。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Hierarchical Paging (階層式分頁)",
    "definition": "將 Page Table 再進行分頁 (如 Two-level paging)，只載入用到的部分。",
    "exam_point": "缺點：位址轉換需多次記憶體存取 (層數越多越慢)，導致 EMAT 變長。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Hashed Page Table",
    "definition": "使用 Hash Function 將 Page No 對應到 Hash Table，碰撞時用 Linked List 串接。",
    "exam_point": "適用情境：適用於大於 32-bit 的稀疏位址空間 (Sparse Address Space)。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Inverted Page Table",
    "definition": "以 Physical Memory Frame 為主體建立表格，整個系統只有一張表。",
    "exam_point": "優點：大幅節省儲存 Page Table 的記憶體空間；缺點：無法支援 Shared Memory。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Segmentation (分段)",
    "definition": "支援 User View 的記憶體管理，將記憶體視為不同性質的段落 (Code, Data, Stack)。",
    "exam_point": "硬體支援：使用 Segment Table，包含 Base (起始位址) 與 Limit (長度)。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Segmentation Protection",
    "definition": "分段機制的保護檢查。",
    "exam_point": "檢查：Offset 必須小於 Limit，否則觸發 Trap (Illegal addressing)。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Paged Segmentation",
    "definition": "結合分頁與分段優點的機制 (如 Intel 系統)。",
    "exam_point": "作法：先將 Logical Address 分段 (Segmentation)，再將每個 Segment 分頁 (Paging)。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Demand Paging (需求分頁)",
    "definition": "執行時不需載入 Process 全部頁面，只載入需要的頁面 (Lazy Swapping)。",
    "exam_point": "機制：透過 Page Fault 機制動態載入頁面。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Valid/Invalid Bit",
    "definition": "Page Table 中的狀態位元。",
    "exam_point": "意義：Valid 代表頁面在 Memory 中；Invalid 代表頁面在 Disk 或是非法存取。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Page Fault (分頁錯誤)",
    "definition": "當存取到標示為 Invalid 的頁面時，MMU 發出 Trap 通知 OS。",
    "exam_point": "處理：OS 需啟動 Disk I/O 將 Page 載入 Free Frame，並更新 Page Table。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Pure Demand Paging",
    "definition": "極端的需求分頁策略。",
    "exam_point": "作法：Process 啟動時記憶體中沒有任何 Page，執行第一條指令即產生 Page Fault。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "EMAT in Demand Paging",
    "definition": "虛擬記憶體下的有效存取時間計算。",
    "exam_point": "關鍵：Page Fault Ratio (p) 必須極低，否則效能會嚴重下降 (因 Disk I/O 慢)。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "FIFO Replacement",
    "definition": "最簡單的頁面置換演算法，換出最早進入的頁面。",
    "exam_point": "問題：可能發生 Belady's Anomaly。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Belady's Anomaly",
    "definition": "FIFO 演算法中的異常現象。",
    "exam_point": "現象：分配給 Process 的 Frames 變多，Page Fault 次數反而增加。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Optimal Replacement (OPT)",
    "definition": "置換「未來最長時間不會被使用」的頁面。",
    "exam_point": "性質：保證有最低的 Page Fault rate，但無法實作 (需預知未來)，僅作比較基準。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "LRU (Least Recently Used)",
    "definition": "置換「最久沒被使用」的頁面。",
    "exam_point": "性質：符合 Stack Property (不會有 Belady's Anomaly)，是相當好的近似演算法。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "LRU Implementation",
    "definition": "實作 LRU 所需的支援。",
    "exam_point": "困難：需要硬體支援 (如 Counter 或 Stack) 紀錄使用順序，軟體實作太慢。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Second Chance (Clock Algorithm)",
    "definition": "LRU 的近似演算法，使用 FIFO 佇列加上 Reference Bit。",
    "exam_point": "運作：若 Ref Bit 為 1 則給予機會 (設為 0 並移至隊尾)，若為 0 則置換。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Enhanced Second Chance",
    "definition": "參考 Reference bit 和 Modify bit (Dirty bit) 的置換演算法。",
    "exam_point": "優先置換：(0, 0) 即「最近沒用過且沒修改過」的頁面，避免寫回 Disk 的成本。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "LFU (Least Frequently Used)",
    "definition": "Counting-based 演算法，置換使用次數最少的頁面。",
    "exam_point": "假設：使用次數少的頁面可能是不重要的。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Global Replacement",
    "definition": "發生 Page Fault 時，可以置換系統中任何 Process 的 Frame。",
    "exam_point": "優點：System Throughput 較佳，是較常用的策略。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Local Replacement",
    "definition": "發生 Page Fault 時，僅能置換該 Process 自己擁有的 Frame。",
    "exam_point": "優點：Process 的效能較穩定，不受其他 Process 干擾。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Thrashing (振盪)",
    "definition": "系統忙於 Page In/Out，導致 CPU Utilization 低落的現象。",
    "exam_point": "惡性循環：OS 誤以為 CPU 閒置而增加 Multiprogramming Degree，導致記憶體更不足。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Causes of Thrashing",
    "definition": "造成 Thrashing 的主要原因。",
    "exam_point": "原因：Process 分配到的 Frame 數不足以涵蓋其 Locality (局部性需求)。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Working Set Model",
    "definition": "基於 Locality Model 用來預防 Thrashing 的方法。",
    "exam_point": "定義：Working Set 是最近 Delta 時間內 Process 存取的獨特 Page 集合。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Buddy System",
    "definition": "Kernel Memory 管理方式，記憶體以 2 的冪次方分割。",
    "exam_point": "特徵：回收時若相鄰的 Buddy 也是 Free 則合併；缺點是有 Internal Fragmentation。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Slab Allocation",
    "definition": "針對特定 Kernel Objects (如 Semaphore) 建立專屬 Cache 的配置法。",
    "exam_point": "優點：沒有 Fragmentation，且記憶體配置與釋放極快。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Seek Time (搜尋時間)",
    "definition": "磁碟讀寫頭移動到正確 Cylinder (磁柱) 所需的時間。",
    "exam_point": "影響：是 Disk Access Time 中最耗時的部分，也是 Disk Scheduling 主要優化的目標。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Rotational Latency",
    "definition": "等待目標 Sector (磁區) 旋轉到讀寫頭下方的時間。",
    "exam_point": "計算：平均 Latency 為旋轉一圈時間的一半。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "SSTF (Shortest Seek Time First)",
    "definition": "選擇離目前磁頭位置最近的 Request 優先服務。",
    "exam_point": "缺點：雖然平均 Seek Time 短，但可能造成 Starvation (遠處的 Request 永遠等不到)。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "SCAN (Elevator Algorithm)",
    "definition": "磁頭像電梯一樣來回掃描，服務沿途的 Requests。",
    "exam_point": "特性：解決了 Starvation 問題。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "C-SCAN (Circular SCAN)",
    "definition": "單向掃描，磁頭移到盡頭後直接拉回開頭而不服務回程。",
    "exam_point": "優點：提供比起 SCAN 更均勻的 Waiting Time。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Contiguous Allocation (連續配置)",
    "definition": "檔案佔用 Disk 上連續的 Blocks。",
    "exam_point": "優點：循序與隨機存取都很快；缺點：External Fragmentation，且檔案擴充困難。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Linked Allocation (連結配置)",
    "definition": "每個 Block 包含指向下一個 Block 的指標。",
    "exam_point": "優點：無 External Fragmentation；缺點：隨機存取極慢 (需從頭循序讀取)。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "FAT (File Allocation Table)",
    "definition": "Linked Allocation 的變形，將指標集中存放在記憶體表格中。",
    "exam_point": "優點：加速隨機存取，常用於 USB 隨身碟。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Indexed Allocation",
    "definition": "使用 Index Block 紀錄所有 Data Blocks 的指標。",
    "exam_point": "優點：支援直接存取且無外部碎裂；缺點：Index Block 本身也是 Overhead。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Unix I-Node",
    "definition": "混合索引架構 (Direct + Indirect pointers)。",
    "exam_point": "設計：小檔案直接存取 (效率高)，大檔案透過多層索引 (支援極大檔案)。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "RAID 0 (Striping)",
    "definition": "將資料分散寫入多顆磁碟 (Striping)。",
    "exam_point": "特性：效能最佳 (平行讀寫)，但無容錯能力 (可靠度差)。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "RAID 1 (Mirroring)",
    "definition": "將資料完全鏡像備份到另一顆磁碟。",
    "exam_point": "特性：可靠度最高，但成本昂貴 (空間利用率僅 50%)。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "RAID 5",
    "definition": "Block-Interleaved Parity，將同位元檢查碼分散在不同磁碟。",
    "exam_point": "特性：容許一顆硬碟損壞，空間利用率為 N/(N+1)，兼具效能與成本。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "RAID 0+1 vs 1+0",
    "definition": "Nested RAID levels，結合 Striping 與 Mirroring。",
    "exam_point": "差異：RAID 1+0 (先 Mirror 再 Stripe) 的可靠度通常優於 RAID 0+1。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Bit Vector (Bit Map)",
    "definition": "Free Space 管理方法，每個 Block 用 1 bit 表示 (0: used, 1: free)。",
    "exam_point": "優點：硬體支援下可快速找到連續的 Free Blocks。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Copy-on-Write (COW)",
    "definition": "Parent 與 Child Process 共享 Page，直到有人寫入時才複製。",
    "exam_point": "優點：大幅加速 Process 建立 (fork) 的速度並節省記憶體。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Memory-Mapped I/O",
    "definition": "將一組 Device registers 映射到 Memory Address Space。",
    "exam_point": "操作：CPU 可以使用標準的資料存取指令 (Load/Store) 來控制 I/O 裝置。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Prepaging",
    "definition": "在 Process 啟動或 Swap-in 時，預先載入預測會用到的 Pages。",
    "exam_point": "目的：避免 Pure Demand Paging 初期大量的 Page Faults。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Page Size Selection",
    "definition": "決定 Page 大小的考量。",
    "exam_point": "權衡：大 Page 減少 Page Table 大小與 TLB Miss；小 Page 減少 Internal Fragmentation。"
  },
  {
    "subject": "OS - Ch7 Memory Management",
    "term": "Internal Fragmentation",
    "definition": "配置給 Process 的記憶體大於其實際需求，導致區塊內部浪費。",
    "exam_point": "發生點：主要發生在 Paging (最後一個 Page 沒用完) 與 Fixed Partitioning。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "LOOK Scheduling",
    "definition": "類似 SCAN (電梯演算法)，但磁頭只走到該方向最後一個請求就折返，不會走到磁碟盡頭。",
    "exam_point": "優點：比起 SCAN，能節省不必要的磁頭移動時間 (Seek Time)。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "C-LOOK (Circular LOOK)",
    "definition": "類似 C-SCAN，磁頭單向服務，只走到該方向最後一個請求，就直接拉回另一端最開頭的請求。",
    "exam_point": "比較：比 C-SCAN 更省時，因為不需走到磁碟的實體邊界。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Low-level Formatting (低階格式化)",
    "definition": "由工廠端執行，將磁碟切分為 Sectors (磁區) 並填入 Header/Trailer。",
    "exam_point": "功能：定義磁碟的實體結構，包含寫入 ECC 錯誤檢查碼。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Logical Formatting (邏輯格式化)",
    "definition": "由 OS 執行，負責建立 File System 的資料結構 (如 Free space map, Root directory)。",
    "exam_point": "例子：Windows 的 Format 指令 (建立 NTFS 或 FAT32)。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Bootstrap Program",
    "definition": "存放在 ROM 中的簡短程式，負責初始化硬體並讀取硬碟中的 OS 核心。",
    "exam_point": "重要性：電腦開機的第一步，若損毀則無法啟動系統。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "MBR (Master Boot Record)",
    "definition": "硬碟的第一個 Sector，存放 Partition Table 與 Bootstrap loader。",
    "exam_point": "故障後果：若 MBR 損壞，BIOS 找不到 OS 載入點，導致開機失敗。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Sector Sparing (備用磁區)",
    "definition": "處理 Bad Block 的機制，Controller 自動將壞軌的邏輯位址 Remap 到備用磁區。",
    "exam_point": "特性：對 OS 透明 (Transparent)，OS 看到的邏輯位址不變，但實體位置已改變。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Sector Slipping",
    "definition": "壞軌處理機制，將壞軌後面的所有磁區序號往後順移。",
    "exam_point": "優缺點：維持了資料的連續性 (Sequential)，但移動大量資料的成本較高。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Swap Space in File System",
    "definition": "在現有 File System 中建立一個大檔案當作 Swap (如 pagefile.sys)。",
    "exam_point": "優缺點：易於實作與調整大小，但存取需經過 File System Layer，效能較差。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Swap Space in Raw Partition",
    "definition": "獨立切分一個沒有 File System 的分割區專供 Swap 使用 (如 Linux Swap)。",
    "exam_point": "優缺點：存取速度快 (略過 File System overhead)，但無法彈性調整大小。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Swap Map",
    "definition": "OS 用來管理 Swap Space 的資料結構。",
    "exam_point": "實作：使用計數器 (Reference count) 追蹤哪些 Swap blocks 正在被 Process 使用。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "RAID 6",
    "definition": "類似 RAID 5，但使用兩個獨立的 Parity (P+Q Redundancy)。",
    "exam_point": "容錯力：容許同時損壞 2 顆硬碟。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "RAID 6 Write Penalty",
    "definition": "RAID 6 在寫入時的效能折損。",
    "exam_point": "原因：每次寫入需計算並更新兩個 Parity Blocks，比 RAID 5 更慢。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "RAID 0+1",
    "definition": "Nested RAID，先做 Striping (0) 再做 Mirroring (1)。",
    "exam_point": "缺點：若一顆硬碟壞掉，該組 Stripe 整組視為失效，只剩另一組 Mirror 運作，可靠度較低。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "RAID 1+0",
    "definition": "Nested RAID，先做 Mirroring (1) 再做 Striping (0)。",
    "exam_point": "優點：若一顆硬碟壞掉，只影響該 Mirror Pair，可靠度高於 RAID 0+1，是較推薦的架構。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Hot Spare (熱備援)",
    "definition": "系統中插著一顆通電但不運作的備用碟。",
    "exam_point": "功能：當 RAID 硬碟損壞，自動頂替並開始 Rebuild，無需人工立即介入。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "SSD Characteristics",
    "definition": "無機械手臂的儲存裝置。",
    "exam_point": "效能：Random Access 與 Sequential Access 速度幾乎相同 (Seek time ≈ 0)。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Write Endurance",
    "definition": "Flash memory 的物理限制。",
    "exam_point": "內容：每個 Cell 只能承受有限次數的寫入/抹除 (P/E cycles)。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "FTL (Flash Translation Layer)",
    "definition": "SSD 內部的 Controller 軟體層。",
    "exam_point": "功能：負責將 OS 發出的 Logical Block Address 對應到 SSD 內部的 Physical Page。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Wear Leveling (耗損平均)",
    "definition": "SSD 延長壽命的關鍵技術。",
    "exam_point": "作法：強制將寫入資料分散到不同的 Physical Blocks，確保所有 Cells 耗損程度一致。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "SSD Scheduling",
    "definition": "針對 SSD 的 I/O 排程策略。",
    "exam_point": "觀念：傳統的磁碟排程 (如 SCAN/C-SCAN) 對 SSD 無意義 (無 Seek time)，甚至因不必要的排序而有害。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "DAS (Direct-Attached Storage)",
    "definition": "儲存裝置透過 Bus (SATA, USB) 直接連在電腦主機上。",
    "exam_point": "特徵：由主機 OS 直接控制，無法透過網路共享 (除非透過 OS 分享)。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "NAS (Network-Attached Storage)",
    "definition": "透過 LAN (區域網路) 提供儲存服務的裝置。",
    "exam_point": "協定：使用檔案級協定 (File-level protocols) 如 NFS, CIFS/SMB。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "NAS Interface",
    "definition": "Client 端對 NAS 的存取介面。",
    "exam_point": "觀點：看起來像是一個「遠端資料夾」或「網路磁碟機」。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "SAN (Storage Area Network)",
    "definition": "連接 Server 與 Storage 的專用高速網路 (如 Fibre Channel, iSCSI)。",
    "exam_point": "用途：適用於大型資料中心，將儲存流量與一般 LAN 流量分離。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "SAN Interface",
    "definition": "Server 端對 SAN 的存取介面。",
    "exam_point": "觀點：Server 看到的是一顆「本機硬碟 (Block Level)」，而非資料夾。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "NAS vs SAN",
    "definition": "兩者主要的架構差異。",
    "exam_point": "差異：NAS 提供 File System (檔案級) 服務；SAN 提供 Raw Block (區塊級) 服務。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "ECC (Error Correction Code)",
    "definition": "存放在 Sector Trailer 中的錯誤檢查碼。",
    "exam_point": "功能：用於偵測並修正從磁碟讀取資料時可能發生的錯誤。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "Garbage Collection (SSD)",
    "definition": "SSD 內部的空間回收機制。",
    "exam_point": "運作：將有效頁面複製到新區塊，並抹除舊區塊，確保有足夠的 Free Pages 供寫入。"
  },
  {
    "subject": "OS - Ch8 Massive Storage System",
    "term": "iSCSI",
    "definition": "一種 SAN 協定，將 SCSI 指令封裝在 IP 封包中傳輸。",
    "exam_point": "優點：可利用現有的乙太網路 (Ethernet) 架設 SAN，成本比 Fibre Channel 低。"
  }
];