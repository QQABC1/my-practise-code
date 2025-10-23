/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        //创建头合并链表的头结点
       ListNode* head=new ListNode(-1);
       ListNode* last=head;
       while(list1 && list2){
        if(list1 -> val <= list2->val){
            last->next=list1;
            list1=list1->next;
        }else{
            last->next=list2;
            list2=list2->next;
        }
        //更新last指针
        last=last->next;
       }
       //==的优先级更高
         last->next = list1 == nullptr ? list2 : list1;
         return head->next;
    }
};